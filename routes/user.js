var express = require('express');
var router = express.Router();
const { body, check, validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const withAuth = require('../helper/authentication');
const user = require('../model/user');
const tutor = require('../model/tutor');
const parent = require('../model/parent');
const helper = require('../model/helper');
const messenger = require('../model/messenger');

const secret = 'thisisasecrettoken';
const saltRounds = 10;

/* GET users listing. */

// check token
router.get('/checkToken', withAuth, function (req, res) {
    res.sendStatus(200);
});

// check tutor token using get method
router.get('/checkTutorToken', withAuth, function (req, res) {
    if (req.isTutor) {
        res.sendStatus(200);
    }else {
        res.status(401).send('Unauthorized: Invalid token provided');
    }
});

// check parent token using get method
router.get('/checkParentToken', withAuth, function (req, res) {
    if (!req.isTutor) {
        res.sendStatus(200);
    }else {
        res.status(401).send('Unauthorized: Invalid token provided');
    }
});

// user login using post method 
router.post('/login', [
    check('email').not().isEmpty(),
    check('password').not().isEmpty()
], function(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() })
    }

    const { email, password } = req.body;

    // Query
    user.login(email).then(function (result) {
        if (result.length === 0){
            // email/username not found
            res.status(401).json({errors: [{msg: 'User does not exist'}]});
        }else {
            // compare hashed password
            const hashedPassword = result[0].password;
            user.isCorrectPassword(password, hashedPassword, function (err, same) {
                if (err){
                    res.status(500).json({errors: [{msg: 'Internal error please try again'}]});
                }else if (!same){
                    res.status(401).json({errors: [{msg: 'Incorrect password'}]});
                }else {
                    // get tutor type id
                    helper.getUserTypeID('tutor').then(function (type) {
                        const id = result[0].id;
                        const username = result[0].username;
                        const isTutor = result[0].user_type_id === type.id;
                        const role = isTutor ? 'Tutor' : 'Parent';

                        // Issue token
                        const payload = { id: id, email: email, username: username, tutor: isTutor};
                        const token = jwt.sign(payload, secret, {expiresIn: '1d'});
                        res.cookie('token', token, { httpOnly: true });

                        const user = {
                            id: id, email: email, username: username, role: role, token: token
                        };

                        res.status(200).json(user);
                    })

                }
            })
        }
    });

});

// edit the password using post method
router.post('/edit_password', [
    withAuth,
    check('old_password')
        .not().isEmpty(),
    check('password')
        .isLength({ min: 8 }).withMessage('Password must contain at least 8 characters')
        .not().isEmpty(),
    check('confirm_password')
        .custom(function(value, { req }) {
            if (value !== req.body.password)
                throw new Error('Password confirmation does not match password');
            return true;
        }),
], function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() })
    }

    const userID = req.id;
    const email = req.email;
    const old_password = req.body.old_password;
    const new_password = req.body.password;

    user.login(email)
        .then(function (result) {
            const hashedPassword = result[0].password;
            user.isCorrectPassword(old_password, hashedPassword, function (err, same){
                if (err){
                    res.status(500).json({errors: [{msg: 'Internal error please try again'}]});
                }else if (!same) {
                    res.status(401).json({errors: [{msg: 'Incorrect old password'}]});
                }else {
                    bcrypt.hash(new_password, saltRounds,function (err, hashedPassword) {
                        if (err) {
                            res.status(500).json({errors: [{msg: 'Internal error please try again'}]});
                        }else {
                            user.editPassword(userID, hashedPassword)
                                .then(function (result) {
                                    res.sendStatus(200);
                                })
                                .catch(function (err) {
                                    console.log(err);
                                    res.sendStatus(500);
                                })
                        }
                    })
                }
            })
        })

});

// get the required information from database for parent registration using get method
router.get('/parent_register', function (req, res) {
    helper.getDistrictList()
        .then(function (result) {
            const hash = {};
            result.forEach(function (e) {
                if ( e.region in hash ){
                    hash[e.region].push(e);
                }else {
                    hash[e.region] = [];
                }
            });

            const data = {
                districtList: hash
            };

            res.status(200).json(data);
        })
        .catch(function (err) {
            console.log(err)
        })
});

// parent registration using post method
router.post('/parent_register', [
    // form validation
    check('username')
        .isLength({ min: 6 }).withMessage('Username must contain at least 6 characters')
        .not().isEmpty()
        .custom(function (value) {
            return user.findUserByUsername(value).then(function (result) {
                if (result.length > 0)
                    return Promise.reject('Username has been used');
            });
        }),
    check('email')
        .isEmail()
        .not().isEmpty()
        .custom(function (value) {
            return user.findUserByEmail(value).then(function (result) {
                if (result.length > 0)
                    return Promise.reject('Email has been used')
            })
        }),
    check('password')
        .isLength({ min: 8 }).withMessage('Password must contain at least 8 characters')
        .not().isEmpty(),
    check('confirm_password')
        .custom(function(value, { req }) {
            if (value !== req.body.password)
                throw new Error('Password confirmation does not match password');
            return true;
        }),
    check('name')
        .not().isEmpty(),
    check('phone')
        .isLength(8).withMessage("Value must be a HK phone number")
        .not().isEmpty()
        .custom(function (value) {
            return parent.findUserByPhone(value).then(function (result){
                if (result.length > 0)
                    return Promise.reject('Phone no. has been used')
            })
        }),
    check('living_district')
        .not().isEmpty(),
    check('address')
        .not().isEmpty()

], function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() })
    }

    const { password } = req.body;

    // hash password
    bcrypt.hash(password, saltRounds,function (err, hashedPassword) {
        if (err) {
            res.status(500).json({ errors: [{ msg: 'Internal error please try again' }] });
        }
        else{
            // create user
            parent.create(hashedPassword, req.body)
                .then(function (result) {
                    res.sendStatus(200);
                })
                .catch(function (err) {
                    console.log(err);
                    res.sendStatus(500);
                })
        }
    });
});

// get the required information from the database for tutor registration using get method
router.get('/tutor_register', function (req, res) {
    helper.getEduLevelList().then(function (eduLevelList) {
        const data = {
            eduLevelList: eduLevelList
        };

        res.status(200).json(data);
    })
});

// tutor registration using post method
router.post('/tutor_register', [
    // form validation
    check('username')
        .isLength({ min: 6 }).withMessage('Username must contain at least 6 characters')
        .not().isEmpty()
        .custom(function (value) {
            return user.findUserByUsername(value).then(function (result) {
                if (result.length > 0)
                    return Promise.reject('Username has been used');
            });
        }),
    check('email')
        .isEmail()
        .not().isEmpty()
        .custom(function (value) {
            return user.findUserByEmail(value).then(function (result) {
                if (result.length > 0)
                    return Promise.reject('Email has been used')
            })
        }),
    check('password')
        .isLength({ min: 8 }).withMessage('Password must contain at least 8 characters')
        .not().isEmpty(),
    check('confirm_password')
        .custom(function(value, { req }) {
            if (value !== req.body.password)
                throw new Error('Password confirmation does not match password');
            return true;
        }),
    check('phone')
        .isLength(8).withMessage("Value must be a HK phone number")
        .not().isEmpty()
        .custom(function (value) {
            return tutor.findUserByPhone(value).then(function (result){
                if (result.length > 0)
                    return Promise.reject('Phone no. has been used')
            })
        }),
    check('full_name_ch')
        .not().isEmpty(),
    check('full_name_en')
        .not().isEmpty(),
    check('nick_name')
        .not().isEmpty(),
    check('sex')
        .not().isEmpty()
        .custom(function (value) {
            if (value !== 'M' && value !== 'F')
                throw new Error('Sex must be either "M" or "F"');
            return true
        }),
    check('birth')
        .not().isEmpty()
        .custom(function (value) {
            if (isNaN(Date.parse(value))) {
                throw new Error('Invalid date');
            }
            return true;
        }),
    check('education_level')
        .not().isEmpty()
], function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() })
    }

    const { password } = req.body;

    bcrypt.hash(password, saltRounds,function (err, hashedPassword) {
        if (err) {
            res.status(500).json({errors: [{msg: 'Internal error please try again'}]});
        } else {
            // create user
            tutor.create(hashedPassword, req.body)
                .then(function () {
                    res.sendStatus(200);
                })
                .catch(function (err) {
                    console.log(err);
                    res.sendStatus(500);
                })
        }
    });
});

// get the list of tutors in the specified range from database using get method
router.get('/list_tutor', function (req, res) {
    const offset = req.query['offset'];
    const limit = req.query['limit'];
    tutor.all(offset, limit)
        .then(function (result) {
            const data = {
                tutorList: result
            };
            res.status(200).json(data);
        })
        .catch(function (err) {
            res.status(500).json({ errors: [err]});
        })
});

// get the number of total tutors using get method
router.get('/tutor_total_count', function (req, res) {
    tutor.totalCount()
        .then(function (result) {
            const data = {
                total: result[0]['count(*)']
            };

            res.status(200).json(data);
        })
        .catch(function (err) {
            res.status(500).json({ errors: [err]});
        })
});

// get the profile of the particular tutor using get method
router.get('/tutor_profile', withAuth, function (req, res) {
    const userID = req.id;

    helper.getEduLevelList().then(function (eduLevelList) {
        tutor.find(userID)
            .then(function (result) {
                const data = {
                    eduLevelList: eduLevelList,
                    user: result
                };
                res.status(200).json(data);
            })
            .catch(function (err) {
                console.log(err);
                res.sendStatus(500);
            })
    });

});

// edit tutor profile using post method
router.post('/edit_tutor', [
    withAuth,
    check('phone')
        .isLength(8).withMessage("Value must be a HK phone number")
        .not().isEmpty()
        .custom(function (value, { req }) {
            return tutor.findUserByPhone(value).then(function (result){
                if (result.length > 0 && result[0].user_id !== req.id)
                    return Promise.reject('Phone no. has been used')
            })
        }),
    check('full_name_ch')
        .not().isEmpty(),
    check('full_name_en')
        .not().isEmpty(),
    check('nick_name')
        .not().isEmpty(),
    check('education_level')
        .not().isEmpty()
], function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() })
    }

    const userID = req.id;

    tutor.edit(userID, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            console.log(err);
            res.sendStatus(500);
        })
});

// get the profile of the particular parent using get method
router.get('/parent_profile', withAuth, function (req, res) {
    const userID = req.id;

    helper.getDistrictList()
        .then(function (districtList) {
            parent.find(userID)
                .then(function (result) {
                    const hash = {};
                    districtList.forEach(function (e) {
                        if ( e.region in hash ){
                            hash[e.region].push(e);
                        }else {
                            hash[e.region] = [];
                        }
                    });

                    const data = {
                        districtList: hash,
                        user: result
                    };

                    res.status(200).json(data);
                })
                .catch(function (err) {
                    console.log(err);
                    res.sendStatus(500);
                })
        })
});

// edit the profile of parent using post method
router.post('/edit_parent', [
    withAuth,
    check('name')
        .not().isEmpty(),
    check('phone')
        .isLength(8).withMessage("Value must be a HK phone number")
        .not().isEmpty()
        .custom(function (value, { req }) {
            return parent.findUserByPhone(value).then(function (result){
                if (result.length > 0 && result[0].user_id !== req.id)
                    return Promise.reject('Phone no. has been used')
            })
        }),
    check('living_district')
        .not().isEmpty(),
    check('address')
        .not().isEmpty()
], function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() })
    }

    const userID = req.id;

    parent.edit(userID, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            console.log(err);
            res.sendStatus(500);
        })
});

// create a new chat with a particular user using post method
router.post('/create_new_chat', withAuth, function (req, res) {
    const userOneID = req.id;
    const userTwoID = req.body.client_id;

    console.log(userOneID, userTwoID);

    messenger.new(userOneID, userTwoID)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            console.log(err);
            res.sendStatus(500);
        })
});

module.exports = router;
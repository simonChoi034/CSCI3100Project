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

const secret = 'thisisasecrettoken';
const saltRounds = 10;

/* GET users listing. */

// check token
router.get('/checkToken', withAuth, function (req, res) {
    res.sendStatus(200);
});

// user login
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
                        const isTutor = result[0].user_type === type.id;

                        // Issue token
                        const payload = { id: id, email: email, username: username, tutor: isTutor};
                        const token = jwt.sign(payload, secret, {expiresIn: '1d'});
                        res.cookie('token', token, { httpOnly: true });
                        res.cookie('username', username, { httpOnly: true});
                        res.sendStatus(200);
                    })

                }
            })
        }
    });

});

router.get('/parent_register', function (req, res) {
    helper.getDistrictList()
        .then(function (result) {
            var hash = {};
            result.forEach(function (e) {
                if ( e.region in hash ){
                    hash[e.region].push(e);
                }else {
                    hash[e.region] = [];
                }
            })

            var data = {
                districtList: hash
            };

            res.status(200).json(data);
        })
        .catch(function (err) {
            console.log(err)
        })
});

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
                    // rename hash key
                    err['msg'] = err['sqlMessage'];
                    delete err['sqlMessage'];
                    res.status(500).json({ errors: err});
                })
        }
    });
});

router.get('/tutor_register', function (req, res) {
   helper.getEduLevelList().then(function (level) {
       var data = {
           eduLevelList: level
       };

       res.status(200).json(data);
   })
});

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
            return parent.findUserByPhone(value).then(function (result){
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
            if (!value.match(/^\d{4}-\d{2}-\d{2}$/))
                throw new Error('Birth must be in format: YYYY-mm-dd');
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
                .then(function (result) {
                    res.sendStatus(200);
                })
                .catch(function (err) {
                    // rename hash key
                    err['msg'] = err['sqlMessage'];
                    delete err['sqlMessage'];
                    res.status(500).json({ errors: [err]});
                })
        }
    });
});

router.get('/list_tutor', function (req, res) {
    console.log(tutor.all().toSQL());
    tutor.all()
        .then(function (result) {
            res.status(200).json(result)
        });
});

module.exports = router;
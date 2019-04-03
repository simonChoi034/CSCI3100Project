var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');

const withAuth = require('../helper/authentication');
const user = require('../model/user');
const tutor = require('../model/tutor');

const secret = 'thisisasecrettoken';

/* GET users listing. */

// check token
router.get('/checkToken', withAuth, function (req, res) {
	res.sendStatus(200);
});

// user login
router.post('/login', [
	check('email').isEmail().not().isEmpty(),
	check('password').not().isEmpty()
], function(req, res, next) {
	const errors = validationResult(req);
	if (!errors.isEmpty()){
		return res.status(422).json({ errors: errors.array() })
	}

	const { email, password } = req.body;

	// Query
	user.login(email).then(function (query) {
		if (query.length === 0 || query.length > 1){
			// email not found
			res.status(401).json({errors: [{msg: 'User does not exist'}]});
		}else {
			// compare hashed password
			const hashedPassword = query[0]['password'];
			user.isCorrectPassword(password, hashedPassword, function (err, same) {
				if (err){
					res.status(500).json({errors: [{msg: 'Internal error please try again'}]});
				}else if (!same){
					res.status(401).json({errors: [{msg: 'Incorrect password'}]});
				}else {
					var id = query[0]['id'];
					if (query[0]['user_type'] === 1) {
						var isTutor = true;
					}

					// Issue token
					const payload = { id: id, email: email, Tutor: isTutor};
					const token = jwt.sign(payload, secret, {});
					res.cookie('token', token, { httpOnly: true }).send(200);
				}
			})
		}
	});

});

router.post('/parent_register', [
	check('username').isLength({ min: 6 }).not().isEmpty(),
	check('email').isEmail().not().isEmpty(),
	check('password').isLength({ min: 8 }).not().isEmpty(),
	check('confirm_password').custom((value, { req }) => {
		if (value !== req.body.password) {
			throw new Error('Password confirmation does not match password');
		}
	}),
	check('name').not().isEmpty(),
	check('phone').isLength(8).not().isEmpty(),
	check('living_area').not().isEmpty(),
	check('address').not().isEmpty()
], function (req, res, next) {
	const errors = validationResult(req);
	if (!error.isEmpty()){
		return res.status(422).json({ errors: errors.array() })
	}

	const { username, password, email, name, phone, living_area, address } = req.body;


});

module.exports = router;

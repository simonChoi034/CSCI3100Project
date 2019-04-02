var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');

const withAuth = require('../helper/authentication');
const user = require('../model/user');
const tutor = require('../model/tutor');

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
		if (query.length === 0){
			// email not found
			res.status(401).json({errors: [{msg: "User does not exist"}]});
		}else {
			// compare hashed password
			const hashedPassword = query[0]['password'];
			user.isCorrectPassword(password, hashedPassword, function (err, same) {
				if (err){
					res.status(500).json({errors: [{msg: "Internal error please try again"}]});
				}else if (!same){
					res.status(401).json({errors: [{msg: "Incorrect password"}]});
				}else {
					// Issue token
					const payload = { email };
					const token = jwt.sign(payload, secret, {});
					res.cookie('token', token, { httpOnly: true }).send(200);
				}
			})
		}
	});

});

module.exports = router;

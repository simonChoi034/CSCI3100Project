var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	const users = [
		{id: 1, fname: "this", lname: "guy"}
	]
  	res.send(users);
});

module.exports = router;

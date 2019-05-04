var express = require('express');
var router = express.Router();

// route the following url
router.use('/user', require('./user'));
router.use('/job', require('./job'));

module.exports = router;

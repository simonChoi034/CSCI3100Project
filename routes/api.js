var express = require('express');
var router = express.Router();

router.use('/user', require('./user'));
router.use('/job', require('./job'));
router.use('/messenger', require('./messenger'));


module.exports = router;

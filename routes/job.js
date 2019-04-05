var express = require('express');
var router = express.Router();
const { body, check, validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');

const withAuth = require('../helper/authentication');
const user = require('../model/user');
const tutor = require('../model/tutor');
const parent = require('../model/parent');
const helper = require('../model/helper');

router.post('/create_job', [

],function (req, res, next) {

});


module.exports = router;
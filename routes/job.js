var express = require('express');
var router = express.Router();
const { body, check, validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');

const withAuth = require('../helper/authentication');
const user = require('../model/user');
const tutor = require('../model/tutor');
const parent = require('../model/parent');
const job = require('../model/job');
const helper = require('../model/helper');

router.post('/create_job', [
    withAuth,
    check('client_id')
        .not().isEmpty(),
    check('district_id')
        .not().isEmpty()
],function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() })
    }

    if (req.isTutor) {
        // if user is not a parent
        res.status(401).send('Unauthorized: Invalid token');
    }else {
        job.create(req.body)
            .then(function () {
                res.sendStatus(200);
            })
            .catch(function (err) {
                res.status(500).json({ errors: [err]});
            })
    }
});

router.get('/list_job', function (req, res) {
    const { offset, limit } = req.body;

    job.all(offset, limit)
        .then(function (result) {
            const data = {
                jobList: result
            };

            res.status(200).json(data);
        })
        .catch(function (err) {
            res.status(500).json({ errors: [err]});
        })
});

router.get('/:id', function (req, res) {
    const id = req.params[0];

    job.find(id)
        .then(function (result) {
            const data = {
                job: result
            };

            res.status(200).json(data);
        })
        .catch(function (err) {
            res.status(500).json({ errors: [err]});
        })
});


module.exports = router;
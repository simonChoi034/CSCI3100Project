var express = require('express');
var router = express.Router();
const { body, check, validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');

const job = require('../model/job');
const helper = require('../model/helper');

// get the required information from database to create a job using get method
router.get('/create_job', function (req, res) {
    helper.getEduLevelList()
        .then(function (eduLevelList) {
            helper.getDistrictList()
                .then(function (districtList) {
                    helper.getStudentLevelList()
                        .then(function (studentLevelList) {
                            helper.getSubjectList()
                                .then(function (subjectList) {
                                    var hash = {};
                                    districtList.forEach(function (e) {
                                        if ( e.region in hash ){
                                            hash[e.region].push(e);
                                        }else {
                                            hash[e.region] = [];
                                        }
                                    });

                                    const data = {
                                        districtList: hash,
                                        eduLevelList: eduLevelList,
                                        subjectList: subjectList,
                                        studentLevelList: studentLevelList
                                    };

                                    res.status(200).json(data);
                                })
                        })
                })
                .catch(function (err) {
                    console.log(err)
                })
        })
});

// create a job using post method
router.post('/create_job', [
    check('client_id')
        .not().isEmpty(),
    check('district')
        .not().isEmpty().withMessage("Please choose a district"),
    check('subject')
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
                res.sendStatus(500);
            })
    }
});

// list all jobs in the required range using get method
router.get('/list_job', function (req, res) {
    offset = req.query['offset'];
    limit = req.query['limit'];
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

// get the total number of jobs using get method
router.get('/total_count', function (req, res) {
    job.totalCount()
        .then(function (result) {
            const data = {
                total: result[0]['count(*)']
            };

            res.status(200).json(data);
        })
        .catch(function (err) {
            res.status(500).json({ errors: [err]});
        })
})

// get the particular job with its id
router.get('/:id', function (req, res) {
    const id = req.params['id'];

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
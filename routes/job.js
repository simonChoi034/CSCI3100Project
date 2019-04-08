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

router.get('/create_job', function (req, res) {
    helper.getEduLevelList()
        .then(function (eduLevelList) {
            helper.getDistrictList()
                .then(function (districtList) {
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
                        eduLevelList: eduLevelList
                    };

                    res.status(200).json(data);
                })
                .catch(function (err) {
                    console.log(err)
                })
        })
});

router.post('/create_job', [
    check('client_id')
        .not().isEmpty(),
    check('district_id')
        .not().isEmpty(),
    check('num_of_student')
        .not().isEmpty()
        .isInt()
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
    job.all()
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

router.get('/district/:id', function (req, res) {
    const id = req.params['id'];

    helper.getDistrictById(id)
        .then(function (district_result) {
            helper.getRegionById(district_result['region_id'])
                .then(function (region_result) {
                    const data = {
                        district_name: district_result['name'],
                        region_name: region_result['name']
                    }

                    res.status(200).json(data);
                })
                .catch(function (err) {
                    res.status(500).json({ errors: [err]});
                })
        })
        .catch(function (err) {
            res.status(500).json({ errors: [err]});
        })
        
})


module.exports = router;
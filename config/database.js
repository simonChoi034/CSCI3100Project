const env = process.env.NODE_ENV || 'development';
const knexfile = require('../knexfile');
const knex = require('knex')(knexfile[env]);

module.exports.db = knex;

module.exports.TABLES = {
    USER_ACCOUNT: 'user_account',
    USER_TYPE: 'user_type',
    EDUCATION_LEVEL: 'education_level',
    TUTOR_PROFILE: 'tutor_profile',
    REGION: 'region',
    DISTRICT: 'district',
    PARENT_PROFILE: 'parent_profile',
    JOB: 'job',
    JOB_SUBJECT: 'job_subject',
    JOB_TUTOR: 'job_tutor',
    STUDENT_LEVEL: 'student_level',
    SUBJECT: 'subject'
};
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
    LIVING_AREA: 'living_area',
    PARENT_PROFILE: 'parent_profile'
};
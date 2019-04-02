const { db, TABLES } = require('../config/database');

module.exports.find = (id) => {
    return db(TABLES.TUTOR_PROFILE).where('id', id);
};

module.exports.create = () => {

};

module.exports.edit = () => {

};
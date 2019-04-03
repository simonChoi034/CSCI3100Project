const { db, TABLES } = require('../config/database');

module.exports.find = (id) => {
    return db(TABLES.PARENT_PROFILE).where('id', id);
};

module.exports.create = () => {

};

module.exports.edit = () => {

};
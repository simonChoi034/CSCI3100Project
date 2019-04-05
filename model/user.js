const { db, TABLES } = require('../config/database');
const bcrypt = require('bcrypt');

module.exports.find = (id) => {
    return db(TABLES.USER_ACCOUNT).where('id', id).first().returning('*');
};

module.exports.login = (value) => {
    return db(TABLES.USER_ACCOUNT).where('email', value)
        .returning('*');
};

module.exports.findUserByEmail = (email) => {
    return db(TABLES.USER_ACCOUNT).where('email', email).returning('*')
};

module.exports.findUserByUsername = (username) => {
    return db(TABLES.USER_ACCOUNT).where('username', username).returning('*')
};

module.exports.isCorrectPassword = (rawPassword, hashedPassword, callback) => {
    bcrypt.compare(rawPassword, hashedPassword, function (err, same) {
        if (err) {
            callback(err);
        }else{
            callback(err, same);
        }
    })
};
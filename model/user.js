const { db, TABLES } = require('../config/database');
const bcrypt = require('bcrypt');

module.exports.find = (id) => {
    return db(TABLES.USER_ACCOUNT).where('id', id).returning('*');
};

module.exports.login = (email) => {
    return db(TABLES.USER_ACCOUNT)
        .where('email', email).limit(1)
        .returning('*');
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
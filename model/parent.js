const { db, TABLES } = require('../config/database');
const helper = require('./helper');

module.exports.find = (id) => {
    return db(TABLES.PARENT_PROFILE).where('id', id);
};

module.exports.create = (username, password, email, name, phone, living_area, address) => {
    return helper.getUserTypeID('parent')
        .then(function (result) {
            return db(TABLES.USER_ACCOUNT)
                .insert([{
                    username: username,
                    password: password,
                    email: email,
                    user_type: result.id
                }])
                .returning('id')
                .then(function (result) {
                    return db(TABLES.PARENT_PROFILE)
                        .insert([{
                            user_id: result[0],
                            name: name,
                            phone: phone,
                            email: email,
                            living_area: living_area,
                            address: address
                        }])
                })
        })
};

module.exports.edit = () => {

};

module.exports.findUserByPhone = (phone) => {
    return db(TABLES.PARENT_PROFILE).where('phone', phone).returning('*')
};
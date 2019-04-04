const { db, TABLES } = require('../config/database');
const helper = require('./helper');

module.exports.find = (id) => {
    return db(TABLES.PARENT_PROFILE).where('id', id);
};

module.exports.create = (password, body) => {
    return helper.getUserTypeID('parent')
        .then(function (result) {
            return db(TABLES.USER_ACCOUNT)
                .insert([{
                    username: body.username,
                    password: password,
                    email: body.email,
                    user_type: result.id
                }])
                .returning('id')
                .then(function (result) {
                    return db(TABLES.PARENT_PROFILE)
                        .insert([{
                            user_id: result[0],
                            name: body.name,
                            phone: body.phone,
                            email: body.email,
                            living_area: body.living_area,
                            address: body.address
                        }])
                })
        })
};

module.exports.edit = () => {

};

module.exports.findUserByPhone = (phone) => {
    return db(TABLES.PARENT_PROFILE).where('phone', phone).returning('*')
};
const { db, TABLES } = require('../config/database');
const helper = require('./helper');

module.exports.find = (id) => {
    return db(TABLES.PARENT_PROFILE)
        .join(TABLES.USER_ACCOUNT, TABLES.USER_ACCOUNT.concat('.id'), '=', TABLES.PARENT_PROFILE.concat('.user_id'))
        .where('user_account.id', id);
};

module.exports.create = (password, body) => {
    return helper.getUserTypeID('parent')
        .then(function (result) {
            return db(TABLES.USER_ACCOUNT)
                .insert([{
                    username: body.username,
                    password: password,
                    email: body.email,
                    user_type_id: result.id
                }])
                .returning('id')
                .then(function (result) {
                    return db(TABLES.PARENT_PROFILE)
                        .insert([{
                            user_id: result[0],
                            name: body.name,
                            phone: body.phone,
                            email: body.email,
                            living_district_id: body.living_district,
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
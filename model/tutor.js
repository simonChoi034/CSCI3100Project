const { db, TABLES } = require('../config/database');
const helper = require('./helper');

module.exports.find = (id) => {
    return db(TABLES.TUTOR_PROFILE).where('user_id', id);
};

module.exports.all = () => {
    return db(TABLES.TUTOR_PROFILE)
        .select('user_id', 'nick_name', 'sex', 'description')
};

module.exports.create = (password, body) => {
    return helper.getUserTypeID('tutor')
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
                    return db(TABLES.TUTOR_PROFILE)
                        .insert([{
                            user_id: result[0],
                            email: body.email,
                            phone: body.phone,
                            full_name_ch: body.full_name_ch,
                            full_name_en: body.full_name_en,
                            nick_name: body.nick_name,
                            sex: body.sex,
                            birth: body.birth,
                            education_level_id: body.education_level,
                            description: body.description
                        }])
                })
        })
};

module.exports.edit = () => {

};
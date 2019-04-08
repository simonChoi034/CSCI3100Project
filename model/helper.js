const { db, TABLES } = require('../config/database');

module.exports.getDistrictList = () => {
    return db(TABLES.DISTRICT)
        .join(TABLES.REGION, TABLES.DISTRICT.concat('.region_id'), '=', TABLES.REGION.concat('.id'))
        .select(
            TABLES.DISTRICT.concat('.id'),
            TABLES.DISTRICT.concat('.name', ' as ', 'district'),
            TABLES.REGION.concat('.name', ' as ', TABLES.REGION)
        )
};

module.exports.getDistrictById = (id) => {
    return db(TABLES.DISTRICT)
        .select('name as district', 'region_id').where('id', id).first()
};

module.exports.getRegionById = (id) => {
    return db(TABLES.REGION)
        .select('name as region').where('id', id).first()
};

module.exports.getEduLevelList = () => {
    return db(TABLES.EDUCATION_LEVEL)
        .select('id',
            'name as education_level'
        )
};

module.exports.getStudentLevelList = () => {
    return db(TABLES.STUDENT_LEVEL)
        .select('id',
            'name as student_level'
        )
};

module.exports.getSubjectList = () => {
    return db(TABLES.SUBJECT)
        .select('id',
            'name as subject'
        )
}

module.exports.getUserTypeID = (name) => {
    return db(TABLES.USER_TYPE).where('name', name).first().returning('id');
};
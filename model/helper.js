const { db, TABLES } = require('../config/database');

module.exports.getDistrictList = () => {
    return db(TABLES.DISTRICT)
        .join(TABLES.REGION, TABLES.DISTRICT.concat('.region_id'), '=', TABLES.REGION.concat('.id'))
        .select(
            TABLES.DISTRICT.concat('.id'),
            TABLES.DISTRICT.concat('.name', ' as ', 'area'),
            TABLES.REGION.concat('.name', ' as ', TABLES.REGION)
        )
};

module.exports.getEduLevelList = () => {
    return db(TABLES.EDUCATION_LEVEL)
        .select(
            'id',
            'name'
        )
};

module.exports.getUserTypeID = (name) => {
    return db(TABLES.USER_TYPE).where('name', name).first().returning('id');
};
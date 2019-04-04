const { db, TABLES } = require('../config/database');

module.exports.getLivingAreaList = () => {
    return db(TABLES.LIVING_AREA)
        .join(TABLES.REGION, TABLES.LIVING_AREA.concat('.region'), '=', TABLES.REGION.concat('.id'))
        .select(
            TABLES.LIVING_AREA.concat('.id'),
            TABLES.LIVING_AREA.concat('.name', ' as ', 'area'),
            TABLES.REGION.concat('.name', ' as ', TABLES.REGION)
        )
};

module.exports.getEduLevelList = () => {
    return db(TABLES.EDUCATION_LEVEL)
        .select(
            'id',
            'name as education_level'
        )
};

module.exports.getUserTypeID = (name) => {
    return db(TABLES.USER_TYPE).where('name', name).first().returning('id');
};
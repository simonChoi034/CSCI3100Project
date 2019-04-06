const { db, TABLES } = require('../config/database');
const helper = require('./helper');

module.exports.find = (id) => {
    return db(TABLES.JOB).where('id', id);
};

module.exports.all = () => {
    return db(TABLES.JOB)
        .select('id',
                'district_id', 
                'location', 
                'student_level_id', 
                'tuition_fee', 
                'num_of_student',
                'tutor_academic_id',
                'tutor_sex',
                'times_per_week',
                'duration',
                'time',
                'remark'
                )
        .where('open', true)
}
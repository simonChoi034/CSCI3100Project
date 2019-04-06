const { db, TABLES } = require('../config/database');
const helper = require('./helper');

module.exports.find = (id) => {
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
            'remark',
            'hotline'
        )
        .where('id', id).returning('*');
};

module.exports.create = (body) => {
    return db(TABLES.JOB).insert([{
        client_id: body.client_id,
        district_id: body.district_id,
        location: body.location,
        student_level_id: body.student_level_id,
        tuition_fee: body.tuition_fee,
        num_of_student: body.num_of_student,
        tutor_academic_id: body.tutor_academic_id,
        tutor_sex: body.tutor_sex,
        times_per_week: body.times_per_week,
        duration: body.duration,
        time: body.time,
        hotline: body.hotline,
        remark: body.remark
    }])
};

module.exports.all = (offset, limit) => {
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
                'remark',
                'hotline'
        )
        .where('open', true)
        .offset(offset)
        .limit(limit)
        .returning('*')
};
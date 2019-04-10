const { db, TABLES } = require('../config/database');
const helper = require('./helper');

module.exports.find = (id) => {
    return db(TABLES.JOB)
        .join(TABLES.DISTRICT, TABLES.DISTRICT.concat('.id'), '=', TABLES.JOB.concat('.district_id'))
        .join(TABLES.REGION, TABLES.REGION.concat('.id'), '=', TABLES.DISTRICT.concat('.region_id'))
        .join(TABLES.EDUCATION_LEVEL, TABLES.EDUCATION_LEVEL.concat('.id'), '=', TABLES.JOB.concat('.tutor_academic_id'))
        .join(TABLES.STUDENT_LEVEL, TABLES.STUDENT_LEVEL.concat('.id'), '=', TABLES.JOB.concat('.student_level_id'))
        .join(TABLES.JOB_SUBJECT, TABLES.JOB_SUBJECT.concat('.job_id'), '=', TABLES.JOB.concat('.id'))
        .join(TABLES.SUBJECT, TABLES.JOB_SUBJECT.concat('.subject_id'), '=', TABLES.SUBJECT.concat('.id'))
        .select('job.id as id',
            'district.name as district',
            'region.name as region',
            'location',
            'student_level.name as student_level',
            'subject.name as subject',
            'tuition_fee',
            'num_of_student',
            'education_level.name as tutor_academic',
            'tutor_sex',
            'times_per_week',
            'duration',
            'lesson_time',
            'remark',
            'hotline'
        )
        .where('job.id', id)
        .returning('*');
};

module.exports.create = (body) => {
    return db(TABLES.JOB)
            .insert([{
            client_id: body.client_id,
            district_id: body.district,
            location: body.location,
            student_level_id: body.student_level,
            tuition_fee: body.tuition_fee,
            num_of_student: body.num_of_student,
            tutor_academic_id: body.tutor_academic,
            tutor_sex: body.tutor_sex,
            times_per_week: body.times_per_week,
            duration: body.duration,
            lesson_time: body.lesson_time,
            hotline: body.hotline,
            remark: body.remark
        }])
        .returning('id')
        .then(function (result) {
            return db(TABLES.JOB_SUBJECT)
                .insert([{
                    job_id: result[0],
                    subject_id: body.subject
                }])
        })
};

module.exports.all = (offset, limit) => {
    return db(TABLES.JOB)
        .join(TABLES.DISTRICT, TABLES.DISTRICT.concat('.id'), '=', TABLES.JOB.concat('.district_id'))
        .join(TABLES.REGION, TABLES.REGION.concat('.id'), '=', TABLES.DISTRICT.concat('.region_id'))
        .join(TABLES.EDUCATION_LEVEL, TABLES.EDUCATION_LEVEL.concat('.id'), '=', TABLES.JOB.concat('.tutor_academic_id'))
        .join(TABLES.STUDENT_LEVEL, TABLES.STUDENT_LEVEL.concat('.id'), '=', TABLES.JOB.concat('.student_level_id'))
        .join(TABLES.JOB_SUBJECT, TABLES.JOB_SUBJECT.concat('.job_id'), '=', TABLES.JOB.concat('.id'))
        .join(TABLES.SUBJECT, TABLES.JOB_SUBJECT.concat('.subject_id'), '=', TABLES.SUBJECT.concat('.id'))
        .offset(parseInt(offset))
        .limit(parseInt(limit))
        .select('job.id as id',
            'district.name as district',
            'region.name as region',
            'location',
            'student_level.name as student_level',
            'subject.name as subject',
            'tuition_fee',
            'num_of_student',
            'education_level.name as tutor_academic',
            'tutor_sex',
            'times_per_week',
            'duration',
            'lesson_time',
            'remark',
            'hotline'
        )
        .where('open', true)
        .orderBy('create_time', 'desc')
};

module.exports.totalCount = () => {
    return db(TABLES.JOB)
        .where('open', true)
        .count()
}
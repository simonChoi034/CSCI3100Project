
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('subject', function (table) {
          table.increments('id').primary();
          table.string('name').notNullable();
      }),
      knex.schema.createTable('student_level', function (table) {
          table.increments('id').primary();
          table.string('name').notNullable();
      }),
      knex.schema.createTable('job', function (table) {
          table.increments('id').primary();
          table.integer('client_id').unsigned();
          table.foreign('client_id').references('parent_profile.user_id');
          table.boolean('open').defaultTo(true).notNullable();
          table.integer('district_id').unsigned().notNullable();
          table.foreign('district_id').references('district.id');
          table.string('location');
          table.integer('student_level_id').unsigned();
          table.foreign('student_level_id').references('student_level.id');
          table.string('tuition_fee');
          table.integer('num_of_student');
          table.integer('tutor_academic_id').unsigned();
          table.foreign('tutor_academic_id').references('education_level.id');
          table.string('tutor_sex', 1).defaultTo('O');
          table.string('times_per_week');
          table.string('duration');
          table.string('time');
          table.dateTime('create_time').defaultTo(knex.fn.now());
          table.string('hotline');
          table.string('remark');
      }),
      knex.schema.createTable('job_subject', function (table) {
          table.increments('id').primary();
          table.integer('job_id').unsigned().references('job.id');
          table.integer('subject_id').unsigned().references('subject.id');
      }),
      knex.schema.createTable('job_tutor', function (table) {
          table.increments('id').primary();
          table.integer('job_id').unsigned().references('job.id');
          table.integer('tutor_id').unsigned().references('tutor_profile.user_id');
      })
  ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('job_tutor'),
        knex.schema.dropTable('job_subject'),
        knex.schema.dropTable('job'),
        knex.schema.dropTable('student_level'),
        knex.schema.dropTable('subject')
    ])
};

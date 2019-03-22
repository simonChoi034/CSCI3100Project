
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('user_type', function (table) {
            table.increments('id').primary();
            table.string('name');
        }),
        knex.schema.createTable('user_account', function (table) {
            table.increments('id').primary();
            table.string('user_name').unique().notNullable();
            table.string('email').unique().notNullable();
            table.string('password').notNullable();
            table.integer('user_type').unsigned().notNullable();
            table.foreign('user_type').references('user_type.id');
            table.dateTime('registration_time').defaultTo(knex.fn.now());
        }),
        knex.schema.createTable('education_level', function (table) {
            table.increments('id').primary();
            table.string('name').notNullable();
        }),
        knex.schema.createTable('tutor_profile', function (table) {
            table.integer('user_id').unsigned().notNullable();
            table.foreign('user_id').references('user_account.id');
            table.string('email').unique().notNullable();
            table.integer('phone').unique().notNullable();
            table.string('full_name_ch').notNullable();
            table.string('full_name_en').notNullable();
            table.string('nick_name').notNullable();
            table.string('sex', 1).notNullable();
            table.date('birth').notNullable();
            table.integer('upper_price').notNullable();
            table.integer('lower_price').notNullable();
            table.integer('education_level').unsigned().notNullable();
            table.foreign('education_level').references('education_level.id');
            table.string('description');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('tutor_profile'),
        knex.schema.dropTableIfExists('user_account'),
        knex.schema.dropTableIfExists('user_type'),
        knex.schema.dropTableIfExists('education_level')
    ])
};
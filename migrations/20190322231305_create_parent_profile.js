
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('region', (table) => {
            table.increments('id').primary();
            table.string('name').unique().notNullable();
        }),
        knex.schema.createTable('district', (table) => {
            table.increments('id').primary();
            table.string('name').unique().notNullable();
            table.integer('region_id').unsigned().notNullable();
            table.foreign('region_id').references('region.id');
        }),
        knex.schema.createTable('parent_profile', (table) => {
            table.integer('user_id').unsigned().notNullable();
            table.foreign('user_id').references('user_account.id');
            table.string('name').notNullable();
            table.integer('phone').unique().notNullable();
            table.string('email').unique().notNullable();
            table.integer('living_district_id').unsigned().notNullable();
            table.foreign('living_district_id').references('district.id');
            table.string('address').notNullable();
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('parent_profile'),
        knex.schema.dropTableIfExists('living_area'),
        knex.schema.dropTableIfExists('region')
    ])
};

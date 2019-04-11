
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('conversation', function (table) {
            table.increments('c_id').primary();
            table.integer('user_one').notNullable().unsigned().references('user_account.id');
            table.integer('user_two').notNullable().unsigned().references('user_account.id');
            table.dateTime('time').notNullable().defaultTo(knex.fn.now());
        }),
        knex.schema.createTable('conversation_reply', function (table) {
            table.increments('cr_id').primary();
            table.text('message');
            table.integer('user_id').notNullable().unsigned().references('user_account.id');
            table.dateTime('time').notNullable().defaultTo(knex.fn.now());
            table.integer('c_id').notNullable().unsigned().references('conversation.c_id');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('conversation_reply'),
        knex.schema.dropTableIfExists('conversation')
    ])
};

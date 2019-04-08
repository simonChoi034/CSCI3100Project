
exports.up = function(knex, Promise) {
    return knex.schema.table('job', function (table) {
        table.renameColumn('time', 'lesson_time');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('job', function (table) {
        table.renameColumn('lesson_time', 'time');
    })
};

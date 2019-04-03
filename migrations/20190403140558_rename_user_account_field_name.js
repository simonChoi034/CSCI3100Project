
exports.up = function(knex, Promise) {
  return knex.schema.table('user_account', function (table) {
    table.renameColumn('user_name', 'username');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('user_account', function (table) {
    table.renameColumn('username', 'user_name');
  })
};

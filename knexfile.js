// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'TeachHub',
      user:     'MrRice',
      password: 'franco0903'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'TeachHub',
      user:     'MrRice',
      password: 'franco0903'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'TeachHub',
      user:     'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

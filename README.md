# Setup

run ```sh install.sh``` to install dependencies

to install knex-cli, run ```npm install -g knex```

# Create database

After cloning the project for the first time, you need to setup the database

run  ```npm run create_database``` to setup database

then run ```knex migrate:latest```

# DB migration

run ```knex migrate:latest``` to update database setting

run ```knex migrate:rollback``` to recover database setting

run ```knex seed:run``` to perform seeding

# Run app

run ```DEBUG=project:* npm run devstart``` in first tab

open another tab and run ```cd client```

then run ```npm start```

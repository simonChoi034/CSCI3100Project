# Setup

run ```sh install.sh``` to install dependencies

# Create database

After cloning the project for the first time, you need to setup the database

run  ```npm run create_database``` to setup database

then run ```knex migrate:latest```

# DB migration

run ```knex migrate:latest``` to update database setting

# Run app

run ```DEBUG=project:* npm run devstart``` in first tab

open another tab and run ```cd client```

then run ```npm start```

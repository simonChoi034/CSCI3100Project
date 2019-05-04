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

# Frontend Folder Structure
All frontend resources are placed in ```client/```

All ReactJS Components are placed in ```client/components/```

All pages and its css are placed in ```client/pages/```

# Backend Folder Structure
All database migration files are placed in ```migrations/```

All database models(entities which create table in database) are placed in ```model/```

All route controllers are placed in ```routes/```

The database configuration file is placed in ```config/```

All seeding files for database are placed in ```seeds/```

clone project: https://github.com/Mosima/panic-api.git

run these commands on the root folder:
yarn run con
yarn run dev  ## the project will run by 1st installing the packages

Note : Make sure you have postgres running and you can add your credentials on the db connection on the server.js file

run this on the browser for seeding:
localhost:4000/seed-div
localhost:4000/seed-panic

the project will automaticaly run on the browser : localhost:3000

AND you can have fun .

The project checks for panics from a user,

A user will click panic button and that will run the checks on which security division is closer to the client and notify the division.

Stack used:
Nodejs/express/knex
React.js
Postgres

Cheers!!!
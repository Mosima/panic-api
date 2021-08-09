const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const compression = require('compression');
const cors = require('cors');
const async = require('async');
const faker = require('faker');
var distance = require('geo-distance');
require('dotenv').config()


const secret = require('./config/secret')
const {divisionService} = require('./route/services')

const db = require("knex")({
    client: "pg",
    connection: {
      host: secret.pgHost,
      user: secret.pgUser,
      password: secret.pgPass,
      database: secret.pgDatabase
    }
  });

const app = express();

app.set("db", db)
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(compression());
app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '200mb', parameterLimit: 100000}));
app.use(morgan('dev'));
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000 ,
    keys: [secret.secretKey]
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));
app.use(cors(
    {origin: ['http://localhost:3000', 'http://localhost:3001'], 
    credentials: true
}));


//new routes
require('./route/seed')(app, async, faker);
require('./route/panic')(app, distance, divisionService);
 

// app.get('*', (req, res)=>{
//    //res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });
app.get('/', (req, res) => {
    res.send("Running")
  })
  

app.listen(secret.port, () => console.log(`Node running on server ${secret.port}`));
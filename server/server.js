const express = require('express');
var passport = require("passport");
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieparser = require('cookie-parser');
const mongoose = require('mongoose');

const path = require('path');

const app = express();

const ads = require('./routes/api/ads');
const users = require('./routes/api/users');
// const message = require('./routes/api/message');


const dbConnection = require('./db') // loads our connection to the mongo database



// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret:'OLX-APP',
    resave: true,
    saveUninitialized:true
}
));

app.use(cookieparser());

require('./passport/index');

// ** Initilize Passport Session in Express App Middleware ** //
app.use(passport.initialize());
// ** Add Passport Session in Express App Middleware ** //
app.use(passport.session());

// Static folder
//  app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.static(path.join(__dirname, '../client/build')));

// ** ROUTES ** //

// AD Routes

app.use('/api/ads',ads)
//User Routes
app.use('/api/users', users);
//User Routes
// app.use('/api/message', message);
//Error Control
app.use(function (err, req, res, next) {

    console.error(err)
    res.status(500).send('Something broke!')

})

const port = process.env.PORT||5000;
app.listen(port,()=>console.log(`Server start on port ${port}`));

const cookieParser = require("cookie-parser");
const express = require("express");
// var cors = require('cors')
const { create } = require('express-handlebars');

const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
// const toastr = require('express-toastr')
const passport = require('passport');

require('./config/passport')(passport);

//------------ DB Configuration ------------//
const db = require('./config/key').MongoURI;

// ------------ Mongo Connection ------------//
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch(err => console.log(err));

fs = require('fs')
require('dotenv').config()

const PORT = process.env.PORT || 5000
const CLIENT_ID = process.env.CLIENT_ID_AUTH

// Google Auth
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);


const app = express();
// app.use(cors())
app.use(express.static(__dirname + '/public'));

const hbs = create({
  // Specify helpers which are only registered on this instance.
  helpers: {
      lowerC(input) { var output = input.toLowerCase();
        return output.replace(" ", ""); },
  }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views/partials')
app.set('views', './views');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());


//------------ Express session Configuration ------------//
app.use(
  session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
  })
);

//------------ Passport Middlewares ------------//
app.use(passport.initialize());
app.use(passport.session());

//------------ Connecting flash ------------//
app.use(flash());

//------------ Connecting Toastr ------------//
// app.use(toastr());

//------------ Global variables ------------//
app.use(function(req, res, next) {
// res.locals.success_msg = req.flash('success_msg');
// res.locals.error_msg = req.flash('error_msg');
// res.locals.error = req.flash('error');
// res.locals.toastr = req.toastr.render()
next();
});

//------------ Routes ------------//
app.use('/', require('./routes/base'));
app.use('/auth', require('./routes/auth'));


app.listen(PORT, (req, res) => console.log(`running on ${PORT}`));

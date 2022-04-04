const cookieParser = require("cookie-parser");
const express = require("express");
// var cors = require('cors')
const { engine } = require('express-handlebars');

const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

require('./config/passport')(passport);

//------------ DB Configuration ------------//
const db = require('./config/key').MongoURI;

//------------ Mongo Connection ------------//
// mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("Successfully connected to MongoDB"))
//     .catch(err => console.log(err));



fs = require('fs')
require('dotenv').config()

const PORT = process.env.PORT || 5000
const CLIENT_ID = process.env.CLIENT_ID_AUTH

// Google Auth
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);


const app = express();
// app.use(cors())
// app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', engine());
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

//------------ Global variables ------------//
app.use(function(req, res, next) {
res.locals.success_msg = req.flash('success_msg');
res.locals.error_msg = req.flash('error_msg');
res.locals.error = req.flash('error');
next();
});

//------------ Routes ------------//
app.use('/', require('./routes/base'));
app.use('/auth', require('./routes/auth'));

// app.get('/', async (req, res) => {

//   const auth = new google.auth.GoogleAuth({
//     // keyFile: "credentials.json",
//     credentials: creds,
//     scopes: "https://www.googleapis.com/auth/spreadsheets",
//   });

//   // Create client instance for auth
//   const client = await auth.getClient();

//   // Instance of Google Sheets API
//   const googleSheets = google.sheets({ version: "v4", auth: client });

//   const spreadsheetId = process.env.SPREADSHEET_ID;

//   // Read rows from spreadsheet
//   const getRows = await googleSheets.spreadsheets.values.get({
//     auth,
//     spreadsheetId,
//     range: "Sheet2!A1:K",
//   });


//   const data = await getRows.data.values
//   const verde_gral = data[1][6]
//   const roja_gral = data[1][7]
//   const nulos = data[1][8]
//   const blancos = data[1][9]
 
//   // console.log(verde_gral, roja_gral, nulos, blancos);

//     res.status(200).render('home', { sedes: arrayToJSONObject(data), verde: verde_gral, roja: roja_gral, nulos: nulos, blancos: blancos});

// });

// app.get("/totales", (req, res) => {
//   res.render("totales");
// });

// app.post("/form", async (req, res) => {
//   const { urna, lista_verde, lista_roja, nulo, blanco, observado } = req.body;
//   const rango = parseInt(urna) + 1
//   console.log(rango)

//   const auth = new google.auth.GoogleAuth({
//     // keyFile: "credentials02.json",
//     credentials: creds,
//     scopes: "https://www.googleapis.com/auth/spreadsheets",
//   });

//   // Create client instance for auth
//   const client = await auth.getClient();

//   // Instance of Google Sheets API
//   const googleSheets = google.sheets({ version: "v4", auth: client });

//   const spreadsheetId = process.env.SPREADSHEET_ID;
//   let sheetRange = `Sheet1!B${rango}:F${rango}`
//   let values = [
//         [
//           lista_verde,
//           lista_roja,
//           nulo,
//           blanco
//         ]
//       ];
//   const sheetResource = {
//     values,
//   };
//   await googleSheets.spreadsheets.values.update({
//     auth,
//     spreadsheetId,
//     range: sheetRange,
//     valueInputOption: "USER_ENTERED",
//     resource: sheetResource
//   }, function (err, response) {
//     if (err) {
//         console.log('The API returned an error: ' + err);
//     } else {
//         console.log('Succesa');   
//         console.log(response.values);
        
//     }
//  });

//   res.send('Success')
// });

// app.get('/api/data', (req, res) => {
//   // const data = [100, 50, 300, 40, 350, 250]; // assuming this is coming from the database

//     fs.readFile('./flare.json', 'utf8', function (err,data) {
//       if (err) {
//         return console.log(err);
//       }
//       // console.log(data);
//       res.send(data);
//     });
// });



app.listen(PORT, (req, res) => console.log(`running on ${PORT}`));

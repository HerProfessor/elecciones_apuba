const cookieParser = require("cookie-parser");
const express = require("express");
const { engine } = require('express-handlebars');
const { google } = require("googleapis");
const  creds  = require('./creds');
require('dotenv').config()

const PORT = process.env.PORT || 5000
const CLIENT_ID = process.env.CLIENT_ID

// Google Auth
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);


const app = express();
app.use(express.static('public'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// function checkAuthenticated(req, res, next){

//   let token = req.cookies['session-token'];
//   let user = {};
//   async function verify() {
//       const ticket = await client.verifyIdToken({
//           idToken: token,
//           audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
//       });
//       const payload = ticket.getPayload();
//       user.name = payload.name;
//       user.email = payload.email;
//       user.picture = payload.picture;
//     }
//     verify()
//     .then(()=>{
//         req.user = user;
//         next();
//     })
//     .catch(err=>{
//         res.redirect('/login')
//     })

// }

app.get('/', (req, res) => {
  res.render('home');
});

app.get("/form", (req, res) => {
  // let user = req.user
  let user = {
    picture: 'https://lh3.googleusercontent.com/a-/AOh14GjE5dXD9oc4Qvo7yBReWn96onQrFc-yLIH1d60=s96-c',
    name: 'O. Ester'
  }
  res.render("form", {user});
  // res.render("editor");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// app.post("/login", (req, res) => {
//   let token = req.body.token
//   async function verify() {
//     const ticket = await client.verifyIdToken({
//         idToken: token,
//         audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
//         // Or, if multiple clients access the backend:
//         //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
//     });
//     const payload = ticket.getPayload();
//     const userid = payload['sub'];
//     // If request specified a G Suite domain:
//     // const domain = payload['hd'];
//     // console.log(payload)
//   }
//   verify()
//   .then(()=>{
//     req.user = user;
//     res.cookie("session token", token)
//     res.send('success')
//     res.redirect('/editor', {user})
//   })
//   .catch(console.error);
  
// });

// app.get('/logout', (req, res)=>{
//   res.clearCookie('session-token')
//   res.redirect('/login')
// })

app.post("/form", async (req, res) => {
  const { first_name, last_name, email, age } = req.body;

  const auth = new google.auth.GoogleAuth({
    // keyFile: "credentials02.json",
    credentials: creds,
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = process.env.SPREADSHEET_ID;

  // // Get metadata about spreadsheet
  // const metaData = await googleSheets.spreadsheets.get({
  //   auth,
  //   spreadsheetId,
  // });

  // Write row(s) to spreadsheet
  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Sheet1!A:D",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [[first_name, last_name, email, age]],
    },
  });

  // Read rows from spreadsheet
  // const getRows = await googleSheets.spreadsheets.values.get({
  //   auth,
  //   spreadsheetId,
  //   range: "Sheet1!A1:D",
  // });

  // res.send(getRows.data.values);
  res.send('Success')
});

app.get("/excel", async (req, res) => {

  const auth = new google.auth.GoogleAuth({
    // keyFile: "credentials.json",
    credentials: creds,
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = process.env.SPREADSHEET_ID;

  // Read rows from spreadsheet
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Sheet1!A1:D",
  });

  res.send(getRows.data.values);
});

app.get('/api/data', (req, res) => {
  const data = [100, 50, 300, 40, 350, 250]; // assuming this is coming from the database
  res.json(data);
});



app.listen(PORT, (req, res) => console.log(`running on ${PORT}`));

const express = require('express');
const router = express.Router();
const { google } = require("googleapis");
const { ensureAuthenticated } = require('../config/checkAuth')

const  creds  = require('../utils/creds');
const arrayToJSONObject = require('../utils/arrayToJSONObject')

//------------ Welcome Route ------------//
// router.get('/', (req, res) => {
//     res.render('home');
// });

router.get('/', async (req, res) => {

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
    range: "Sheet2!A1:L",
  });


  const data = await getRows.data.values
  const verde_gral = data[1][6]
  const roja_gral = data[1][7]
  const nulos = data[1][8]
  const blancos = data[1][9]
  const mesas = data[1][11]
 
  // console.log(verde_gral, roja_gral, nulos, blancos);

    res.status(200).render('home', { 
      sedes: arrayToJSONObject(data), 
      verde: verde_gral, 
      roja: roja_gral, 
      nulos: nulos, 
      blancos: blancos,
      mesas: mesas
    });

});

router.get("/totales", (req, res) => {
  res.render("totales");
});

router.post("/form", async (req, res) => {
  const { urna, lista_verde, lista_roja, nulo, blanco } = req.body;
  const rango = parseInt(urna) + 1
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
  let sheetRange = `Sheet1!B${rango}:F${rango}`
  let values = [
        [
          lista_verde,
          lista_roja,
          nulo,
          blanco
        ]
      ];
  const sheetResource = {
    values,
  };
  await googleSheets.spreadsheets.values.update({
    auth,
    spreadsheetId,
    range: sheetRange,
    valueInputOption: "USER_ENTERED",
    resource: sheetResource
  }, function (err, response) {
    if (err) {
      // req.toastr.error('Ha ocurrido un error', '¡ERROR!');
        console.log('The API returned an error: ' + err);
    } else {
      // req.flash('success_msg')
      console.log('Succesa');   
    }
  });
  
  // req.toastr.success('La carga se ha registrado.');
  res.render('form')
});

router.get('/api/data', (req, res) => {
    // const data = [100, 50, 300, 40, 350, 250]; // assuming this is coming from the database
  
      fs.readFile('./flare.json', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        // console.log(data);
        res.send(data);
      });
  });


//------------ Form Route ------------//
// router.get('/form', (req, res) => res.render('form', {
router.get('/form', ensureAuthenticated, (req, res) => res.render('form', {
    // name: req.user.name
}));

module.exports = router;
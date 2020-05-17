const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 8000;
const table = 'calculations';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PW,
  database: process.env.MYSQL_DB
});


app.get('/api/calculations', (req, res) => {
  pool.query(`SELECT * FROM ${ table } ORDER BY created_at DESC LIMIT 10`, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});
app.post('/api/calculations', (req, res) => {
  console.log(req.body);
  let calc_obj = req.body;
  let queryText = `INSERT INTO calculator_challenge.calculations(number1, operator, number2, total, created_at)VALUES(${ calc_obj.number1 }, "${ calc_obj.operator }", ${ calc_obj.number2 }, ${ calc_obj.total }, "${ calc_obj.created_at }");`;

  pool.query(queryText, (error, result, fields) => {
    if (error) throw error;
    res.send(JSON.stringify(result));
  });
});

app.listen(port, () => {
  console.log(`App server listening to port ${ port }`);
});
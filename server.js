const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const PORT = process.env.PORT || 3122;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send("Welcome to my Invoicing App");
    console.log('====================================');
    console.log(`200 OK`);
    console.log('====================================');
});

app.listen(PORT, function () {
    console.log(`App running on localhost:${PORT}`);
});
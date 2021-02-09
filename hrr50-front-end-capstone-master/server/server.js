const express = require('express');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const db = require('../database/index.js');
require('newrelic');

const port = 3123;
const app = express();

app.use(compression());
app.use('/', express.static(path.join(__dirname, '..', 'public')));
// app.use(cors({ origin: 'http://54.157.193.11:8000/' }));
app.use('/bundle', express.static(path.join(__dirname, '..', 'public/app.js')));

app.get('/', cors(), (req, res) => {
  res.send('Hello from the server!');
});

app.get('/photos', (req, res) => {
  let item = Math.floor(Math.random() * 10000000)
  db.retrieveOneProperty(item, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}!`);
});

module.exports = app;

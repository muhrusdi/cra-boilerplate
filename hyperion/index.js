require('dotenv').config();
const debug = require('debug')('server');
const express = require('express');
const path = require('path');
const app = express();

/**
 * Port App
 */
const IS_PROD = process.env.NODE_ENV === "production";
const PORT = IS_PROD ? process.env.PORT_PROD : process.env.PORT_DEV || 3000;

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

/**
 * Listening App
 */
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  debug(`App listening on port ${PORT}`);
});
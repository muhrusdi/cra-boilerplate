const debug = require('debug')('server');
const express = require('express');
const path = require('path');
const app = express();

const PORT = 9090

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  debug(`App listening on port ${PORT}`)
});
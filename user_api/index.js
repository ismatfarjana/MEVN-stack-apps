// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger/logger');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  logger.info('default route');
  res.send('App works!!!');
});

app.use('/api', require('./routes/routes'));

// Handle undefined and other routes
app.get('*', (req, res) => {
  logger.info('users route');
  res.send('App works in undefined route!!');
});

// listen
app.listen(port, (err) => {
  if (err) console.log(err);
  console.log('App is running on 3000!');
});

// routes
app.get('/', (req, res) => {
  res.send('App is running on port 3000!');
});

logger.info(`running server from the port:::::${port}`);

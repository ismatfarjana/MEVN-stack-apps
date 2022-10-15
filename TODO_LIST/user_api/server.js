// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger/logger');
const dotenv = require('dotenv');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

// Handle different environments
const environment = process.env.ENVIRONMENT;
let envPath = './environments/.env-dev';

if (environment === 'test') {
  envPath = './environments/.env-test';
} else if (environment === 'production') {
  envPath = './environments/.env-prod';
}
dotenv.config({ path: envPath });

// Handle routes
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
  if (err) logger.error('Error::', err);
  logger.info(`running server from the port: ${port}`);
});


// import dependencies
const express = require('express');

const apiRouter = express();

apiRouter.use('/user', require('./user'));
apiRouter.use('/task', require('./tasks'));

module.exports = apiRouter;

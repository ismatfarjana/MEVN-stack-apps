// Legasy logger
// const Logger = function () { };

// Logger.prototype.info = (logText) => {
//   console.log(`info::${logText}`);
// };

// Logger.prototype.debug = (logText) => {
//   console.log(`debug::${logText}`);
// };

// Logger.prototype.error = (logText) => {
//   console.log(`error::${logText}`);
// };

// module.exports = new Logger();

const pine = require('pine');

const logger = pine();

class APILogger {
  info(message) {
    logger.info(message);
  }

  info(message, data) {
    logger.info(`${message}   ${undefined != data ? JSON.stringify(data) : ''}`);
  }

  error(message) {
    logger.error(message)
  }
}

module.exports = new APILogger();
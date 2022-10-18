const Logger = function () { };

Logger.prototype.info = (logText) => {
  console.log(`info::${logText}`);
};

Logger.prototype.debug = (logText) => {
  console.log(`debug::${logText}`);
};

Logger.prototype.error = (logText) => {
  console.log(`error::${logText}`);
};

module.exports = new Logger();

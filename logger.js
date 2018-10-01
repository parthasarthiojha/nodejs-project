/*jshint esversion: 6 */ 
const winston = require('winston');

const loggers = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      'timestamp': true,
      'colorize': true
    })
  ]
});

module.exports = loggers;
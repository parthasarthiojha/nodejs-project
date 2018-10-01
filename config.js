/*jshint esversion: 6 */ 
const pkg = require('./package');

const config = {
  server: {
    port: process.env.PORT || 8099,
    logging: {
      enabled: true
    }
  },
  bonus: {
    url: process.env.BONUS_SERVICE_URL || 'http://bonus-service/bonus',
    enalbed: process.env.BONUS_SERVICE_ENABLED
  },
  api: {
    version: pkg.version,
    docs: '/docs'
  }
};

module.exports = config;
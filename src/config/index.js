/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
};

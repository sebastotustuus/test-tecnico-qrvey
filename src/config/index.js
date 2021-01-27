if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || '',
};

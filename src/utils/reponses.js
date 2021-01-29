const { HOST, PORT } = require('../config');

exports.responseMessage = (payload, msg = '') => {
  return { ...payload, message: msg };
};

exports.getRelativeUrl = (fileName, route) => {
  if (process.env.NODE_ENV.trim() == 'development') {
    return `${HOST}:${PORT}/${route}/${fileName}`;
  }
  return `${HOST}/${route}/${fileName}`;
};

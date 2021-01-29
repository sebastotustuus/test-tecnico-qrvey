const { HOST, PORT } = require('../config');

exports.responseMessage = (payload, msg = '') => {
  return { ...payload, message: msg };
};

exports.getRelativeUrl = (fileName) => {
  if (process.env.NODE_ENV.trim() == 'development') {
    return `${HOST}:${PORT}/files/${fileName}`;
  }
  return `${HOST}/files/${fileName}`;
};

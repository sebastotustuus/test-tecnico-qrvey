const { HOST, PORT } = require('../config');

exports.getArrayUsers = (payload) => {
  return payload.map((user) => [
    user.name,
    user.email,
    user.username,
    user.company.position,
  ]);
};

exports.getRelativeUrl = (fileName, route) => {
  if (process.env.NODE_ENV.trim() == 'development') {
    return `${HOST}:${PORT}/${route}/${fileName}`;
  }
  return `${HOST}/${route}/${fileName}`;
};

const usersDb = require('../userdb.mock');

module.exports = {
  User: {
    find: jest.fn().mockReturnValueOnce(usersDb),
    findById: jest.fn().mockReturnValueOnce(usersDb[0]),
    create: jest.fn().mockReturnValueOnce(usersDb[0]),
    findByIdAndUpdate: jest.fn().mockReturnValueOnce(usersDb[0]),
    findByIdAndDelete: jest.fn().mockReturnValueOnce(true),
  },
};

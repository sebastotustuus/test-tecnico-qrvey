const modelsMock = require('../models-mock');
const UserRepositoryMock = require('./userRepository.mock');

module.exports = {
  userResporitory: new UserRepositoryMock(modelsMock),
};

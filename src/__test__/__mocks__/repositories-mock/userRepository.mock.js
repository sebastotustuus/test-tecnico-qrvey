const BaseRepositoriesMock = require('./baseRepository.mock');

module.exports = class UserRepositoryMock extends (
  BaseRepositoriesMock
) {
  constructor(db) {
    super(db, 'User');
  }
};

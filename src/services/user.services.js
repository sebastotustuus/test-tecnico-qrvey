const BaseServices = require('./base.services');

module.exports = class UserService extends BaseServices {
  constructor(repository) {
    super(repository);
  }
};

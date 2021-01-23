const BaseServices = require('./base.services');

module.exports = class UserService extends (
  BaseServices
) {
  constructor({ userResporitory }) {
    super(userResporitory);
  }
};

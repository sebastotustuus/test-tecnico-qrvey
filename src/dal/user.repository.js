const BaseRepositories = require('./base.repository');
let _db = null;
module.exports = class UserRepository extends (
  BaseRepositories
) {
  constructor(db) {
    super(db, 'User');
  }
};

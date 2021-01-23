const models = require('./models');
const UserRepository = require('./user.repository');

module.exports = {
  userResporitory: new UserRepository(models),
};

const UserRepository = require('./user.repository');
const { NODE_ENV } = require('../config');

let models = require('./models');

if (NODE_ENV == 'staging') {
  models = require('../__test__/__mocks__/models-mock');
}

module.exports = {
  userResporitory: new UserRepository(models),
};

const repositories = require('../dal');
const UserServices = require('./user.services');
const FileServices = require('./files.services');

module.exports = {
  userServices: new UserServices(repositories),
  fileServices: new FileServices(),
};

const repositories = require('../dal');
const UserServices = require('./user.services');

module.exports = {
    userServices: new UserServices(repositories)
}
const services = require('../services');
const UserController = require('./user.controller');

module.exports = {
    usersController: new UserController(services)
}
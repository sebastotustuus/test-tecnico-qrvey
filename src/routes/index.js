const userRoutes = require('./user.routes');
const controllers = require('../modules');

module.exports = (router) => ({
  userRoutes: userRoutes(router, controllers)
});

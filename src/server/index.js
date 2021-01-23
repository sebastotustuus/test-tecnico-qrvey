const config = require('../config');
const router = require('express').Router();
const Startup = require('./startup');
const Server = require('./server');
const apiRoutes = require('../routes/index.routes');

/**Models */
// const db = require('../models');

/**Routes */
const routes = require('../routes');

const _router = apiRoutes(routes(router), router);

const server = new Server(config, _router, {}, null);

const app = new Startup({ server });

module.exports = app;

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { MONGO_URI } = require('../config');

class Server {
  constructor(config, router, middlewares) {
    this.config = config;
    this.mongoose = mongoose;
    this.express = express();
    this.express.use('/files', express.static(path.join('/tmp')));
    this.express.use(router);
    this.middlewares = middlewares;
    this.errorhandlers();
  }

  start() {
    return new Promise((resolve) => {
      this.express.listen(this.config.PORT, () => {
        console.log('Server on port:', this.config.PORT);
        resolve();
      });
    });
  }

  start_test() {
    return this.express;
  }

  async getConnection() {
    mongoose.set('useCreateIndex', true);
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
  }

  errorhandlers() {
    // Catch 404 Error
    this.express.use(this.middlewares.notFoundHandler);

    // Catch Middlewares Errors
    this.express.use(this.middlewares.logErrors);
    this.express.use(this.middlewares.wrapErrors);
    this.express.use(this.middlewares.errorHandler);
  }
}

module.exports = Server;

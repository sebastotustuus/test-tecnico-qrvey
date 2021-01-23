const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('../config');

class Server {
  constructor(config, router, middlewares) {
    this.config = config;
    this.mongoose = mongoose;
    this.express = express().use(router);
    this.middlewares = middlewares;
    this.errorhandlers();
  }

  start() {
    return new Promise((resolve) => {
      this.express.listen(this.config.PORT, () => {
        console.log('App running on port', this.config.PORT);
        resolve();
      });
    });
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

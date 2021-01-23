const express = require('express');

let config = null;
let _express = null;
let _db = null;

class Server {
  constructor(config, router, db, middlewares) {
    this.config = config;
    this._express = express().use(router);
    this._db = db;
    this.errorhandlers();
  }

  start() {
    return new Promise((resolve) => {
      this._express.listen(this.config.PORT, () => {
        console.log('App running on port', this.config.PORT);
        resolve();
      });
    });
  }

  getConnection() {
    return this._db;
  }

  errorhandlers() {}
}

module.exports = Server;

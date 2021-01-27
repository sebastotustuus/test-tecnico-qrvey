class Startup {
  constructor({ server }) {
    this.server = server;
  }

  async start() {
    await this.server.start();
  }

  start_test() {
    return this.server.start_test();
  }

  getConnection() {
    return this.server.getConnection();
  }
}

module.exports = Startup;

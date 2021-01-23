class Startup {
  constructor({ server }) {
    this.server = server;
  }

  async start() {
    await this.server.start();
  }

  getConnection() {
    return this.server.getConnection();
  }
}

module.exports = Startup;

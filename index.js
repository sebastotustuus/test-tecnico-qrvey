const app = require('./src/server');

app
  .getConnection()
  .then(() => {
    app.start().then().catch(console.log);
  })
  .catch(console.log);

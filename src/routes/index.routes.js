const compression = require('compression');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

module.exports = (modules, Router) => {
  const router = Router;
  const apiRouter = Router;

  // Middleware Routes
  apiRouter
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(compression())
    .use(helmet());

  // Routes
  apiRouter.use(modules.userRoutes);

  // Api Inyection
  router.use('/api', apiRouter);

  //Welcome Message
  router.get('/', (req, res) => {
    res.status(200).json({
      message: 'Bienvenido a Test Qrvey API',
    });
  });

  return router;
};

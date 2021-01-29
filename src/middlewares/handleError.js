const boom = require('@hapi/boom');

exports.logErrors = (err, req, res, next) => {
  next(err);
};

exports.errorHandler = (err, req, res, next) => {
  const {
    output: { statusCode, payload },
  } = err;
  res.status(statusCode).json(withErrorsStack(payload, err.stack));
};

exports.wrapErrors = (err, req, res, next) => {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }
  next(err);
};

exports.notFoundHandler = (req, res) => {
  const {
    output: { statusCode, payload },
  } = boom.notFound();
  payload.message = 'Recurso no encontrado. Comuniquese con el administrador';
  res.status(statusCode).json(payload);
};

const withErrorsStack = (err, stack) => {
  // if (process.env.NODE_ENV.trim() == 'development') {
     return { ...err, stack };
  // }
  // return err;
};

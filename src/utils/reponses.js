exports.notFoundMessage = (payload, msg) => {
  return { ...payload, message: msg ?? 'Recurso no encontrado' };
};

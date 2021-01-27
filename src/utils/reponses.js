exports.responseMessage = (payload, msg) => {
  return { ...payload, message: msg ?? '' };
};

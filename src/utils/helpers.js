exports.getArrayUsers = (payload) => {
  return payload.map((user) => [
    user.name,
    user.email,
    user.username,
    user.company.position,
  ]);
};

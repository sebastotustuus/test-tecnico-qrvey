exports.userDto = (payload) => {
  return payload.map((user) => ({
    id: user._id,
    name: user.name,
    username: user.username,
    email: user.email,
    company: user.company,
  }));
};

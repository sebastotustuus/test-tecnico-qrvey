exports.usersDto = (payload) => {
  return payload.map((user) => ({
    id: user._id,
    name: user.name,
    username: user.username,
    email: user.email,
    company: user.company,
  }));
};

exports.userDto = (payload) => ({
  id: payload._id,
  name: payload.name,
  username: payload.username,
  email: payload.email,
  company: payload.company,
});

exports.usersDto = (payload) => {
  let response = [];
  if (payload) {
    response = payload.map((user) => ({
      id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      company: user.company,
    }));
  }
  return response;
};

exports.userDto = (payload) => {
  let response = {};
  if (payload) {
    response = {
      id: payload._id,
      name: payload.name,
      username: payload.username,
      email: payload.email,
      company: payload.company,
    };
  }
  return response;
};

require('regenerator-runtime/runtime');

jest.mock('../services/dto/user.dto.js', () => {
  const usersMock = require('./__mocks__/users.mock');
  return {
    usersDto: jest.fn().mockReturnValue(usersMock),
    userDto: jest.fn().mockReturnValue(usersMock[3]),
  };
});

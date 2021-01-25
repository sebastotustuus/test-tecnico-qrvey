const sinon = require('sinon');
const repositories = require('../../../dal');
const UserServices = require('../../../services/user.services');
const users = require('../../__mocks__/users.mock');

jest.mock('../../../services/dto/user.dto', () => {
  const usersMock = require('../../__mocks__/users.mock');
  return { userDto: jest.fn().mockReturnValueOnce(usersMock) };
});

describe('User Service', () => {
  const userService = new UserServices(repositories);
  it('should get all users', async () => {
    const userStub = sinon
      .stub(repositories.userResporitory, 'getAll')
      .returns(users);
    const _users = await userService.getAll();
    expect(userStub.calledOnce).toBe(true);
    expect(_users).toBe(users);
  });
});

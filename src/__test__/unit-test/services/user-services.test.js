const sinon = require('sinon');
const repositoriesMock = require('../../__mocks__/repositories-mock');
const UserServices = require('../../../services/user.services');
const users = require('../../__mocks__/users.mock');

jest.mock('../../../services/dto/user.dto', () => {
  const usersMock = require('../../__mocks__/users.mock');
  return {
    usersDto: jest.fn().mockReturnValue(usersMock),
    userDto: jest.fn().mockReturnValue(usersMock[3]),
  };
});

describe('User Service', () => {
  const userService = new UserServices(repositoriesMock);
  it('Should get all users', async () => {
    const spy = jest.spyOn(repositoriesMock.userResporitory, 'getAll');
    const _users = await userService.getAll();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(_users).toBe(users);
  });

  it('Should get one user', async () => {
    const spy = jest.spyOn(repositoriesMock.userResporitory, 'get');
    const user = await userService.get();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(user).toBe(users[3]);
  });

  it('Should return the create user', async () => {
    const spy = jest.spyOn(repositoriesMock.userResporitory, 'create');
    const user = await userService.create();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(user).toBe(users[3]);
  });

  it('Should return the updated user', async () => {
    const spy = jest.spyOn(repositoriesMock.userResporitory, 'update');
    const user = await userService.update();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(user).toBe(users[3]);
  });

  it('Should return true to deleted user', async () => {
    const spy = jest.spyOn(repositoriesMock.userResporitory, 'delete');
    const user = await userService.delete();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(user).toBe(true);
  });
});

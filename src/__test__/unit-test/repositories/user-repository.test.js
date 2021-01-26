const UseRepository = require('../../../dal/user.repository');
const models = require('../../__mocks__/models-mock');
const usersDb = require('../../__mocks__/userdb.mock');


describe('User Repository', () => {
    const userRepository = new UseRepository(models);
    it('Should get all users', async () => {
      const spy = jest.spyOn(models.User, 'find');
      const users = await userRepository.getAll();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(users).toBe(usersDb);
    });
  
    it('Should get one user', async () => {
      const spy = jest.spyOn(models.User, 'findById');
      const user = await userRepository.get();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(user).toBe(usersDb[0]);
    });
  
    it('Should return the create user', async () => {
      const spy = jest.spyOn(models.User, 'create');
      const user = await userRepository.create();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(user).toBe(usersDb[0]);
    });
  
    it('Should return the updated user', async () => {
      const spy = jest.spyOn(models.User, 'findByIdAndUpdate');
      const user = await userRepository.update();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(user).toBe(usersDb[0]);
    });
  
    it('Should return true to deleted user', async () => {
      const spy = jest.spyOn(models.User, 'findByIdAndDelete');
      const user = await userRepository.delete();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(user).toBe(true);
    });
  });

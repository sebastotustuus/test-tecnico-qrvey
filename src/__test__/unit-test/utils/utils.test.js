const { responseMessage } = require('../../../utils/reponses');
const { getArrayUsers } = require('../../../utils/helpers');
const users = require('../../__mocks__/users.mock');

describe('Utils', () => {
  it('should return a reponse with custom message', () => {
    const expected = responseMessage({}, 'Este es un test');
    expect(expected).toHaveProperty('message', 'Este es un test');
  });

  it('should return and array in array', () => {
    const expected = getArrayUsers(users);
    expect(expected.length).toBe(users.length);
  });
});

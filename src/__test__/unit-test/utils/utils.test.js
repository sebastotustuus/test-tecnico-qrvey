const { getArrayUsers } = require('../../../utils/helpers');
const users = require('../../__mocks__/users.mock');

describe('Utils', () => {
  it('should return and array in array', () => {
    const expected = getArrayUsers(users);
    expect(expected.length).toBe(users.length);
  });
});

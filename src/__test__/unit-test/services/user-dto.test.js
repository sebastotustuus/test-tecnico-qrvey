const { usersDto, userDto } = require('../../../services/dto/user.dto');
const usersDbMock = require('../../__mocks__/userdb.mock');

describe('Users DTO', () => {
  it('should return a array formated', () => {
    const expected = usersDto(usersDbMock);
    expect(expected.length).toBe(usersDbMock.length);
    expect(expected).not.toBeNull();
    expect(expected).not.toBeUndefined();
  });

  it('should return a array formated', () => {
    const expected = usersDto([]);
    expect(expected.length).toBe([].length);
    expect(expected).not.toBeNull();
    expect(expected).not.toBeUndefined();
  });

  it('should return a array formated', () => {
    const expected = usersDto(null);
    expect(expected.length).toBe([].length);
    expect(expected).not.toBeNull();
    expect(expected).not.toBeUndefined();
  });

  it('should return a object formated', () => {
    const expected = userDto(usersDbMock[0]);
    expect(expected).toHaveProperty('id');
    expect(expected.id).toMatch(/^[0-9a-fA]{24}$/);
    expect(expected).not.toBeNull();
    expect(expected).not.toBeUndefined();
  });
});

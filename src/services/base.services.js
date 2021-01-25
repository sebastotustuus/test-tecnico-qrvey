let _modelRepository = null;
const { usersDto, userDto } = require('./dto/user.dto');
class BaseServices {
  constructor(modelRepository) {
    _modelRepository = modelRepository;
  }

  async getAll() {
    const response = await _modelRepository.getAll();
    return usersDto(response);
  }

  async get(id) {
    let user = await _modelRepository.get(id);
    return userDto(user);
  }

  async create(entity) {
    const createdUser = await _modelRepository.create(entity);
    return userDto(createdUser);
  }

  async update(id, entity) {
    const updatedUser = await _modelRepository.update(id, entity);
    return userDto(updatedUser);
  }

  async delete(id) {
    return await _modelRepository.delete(id);
  }
}

module.exports = BaseServices;

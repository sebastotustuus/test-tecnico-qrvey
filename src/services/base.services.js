let _modelRepository = null;
const { userDto } = require('./dto/user.dto');
class BaseServices {
  constructor(modelRepository) {
    _modelRepository = modelRepository;
  }

  async getAll() {
    return userDto(await _modelRepository.getAll());
  }

  async get(id) {
    return await _modelRepository.get(id);
  }

  async create(entity) {
    return await _modelRepository.create(entity);
  }

  async update(id, entity) {
    return await _modelRepository.update(id, entity);
  }

  async delete(id) {
    return await _modelRepository.delete(id);
  }
}

module.exports = BaseServices;

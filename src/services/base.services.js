let _modelRepository = null;
class BaseServices {
  constructor(modelRepository) {
    _modelRepository = modelRepository;
  }

  async getAll() {
    return 'GET ALL SERVICES';
  }

  async get(id) {
    return 'GET ONE';
  }

  async create(entity) {
    return 'CREATE USER';
  }

  async update(id, entity) {
    return 'UPDATE USER';
  }

  async delete(id) {
    return 'DELETE USER';
  }
}

module.exports = BaseServices;

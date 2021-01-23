let _db = null;
let _entity = null;

class BaseRepositories {
  constructor(db, entity) {
    _db = db;
    _entity = entity;
  }

  async getAll() {
    const users = await _db[_entity].find();
    return users;
  }

  async get(id) {
    const user = await _db[_entity].findById(id);
    return user;
  }

  async create(entity) {
    const createdUser = await _db[_entity].create(entity);
    return createdUser;
  }

  async update(id, entity) {
    const updatedUser = await _db[_entity].findByIdAndUpdate(id, entity, {
      new: true,
    });
    return updatedUser;
  }

  async delete(id) {
    await _db[_entity].findByIdAndDelete(id);
    return true;
  }
}

module.exports = BaseRepositories;

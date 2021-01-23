let _employeServices = null;

module.exports = class EmployeeController {
  constructor(UserServices) {
    _employeServices = UserServices;
  }

  async list(req, res, next) {
    try {
      return res.status(200).json({ msg: 'List Data' });
    } catch (error) {
      next(error);
    }
  }

  async get(req, res, next) {
    try {
      return res.status(200).json({ msg: 'List One' });
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    const { body } = req;
    try {
      return res.status(201).json({ msg: 'User created succesfully' });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      return res.status(200).json({ msg: 'User updated succesfully' });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      return res.status(200).json({ msg: 'User deleted succesfully' });
    } catch (error) {
      next(error);
    }
  }
};

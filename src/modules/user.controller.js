let _userServices = null;

module.exports = class EmployeeController {
  constructor({ userServices }) {
    _userServices = userServices;
  }

  async list(req, res, next) {
    try {
      const response = await _userServices.getAll();
      return res.status(200).json({ response });
    } catch (error) {
      next(error);
    }
  }

  async get(req, res, next) {
    const { params } = req;
    try {
      const response = await _userServices.get(params.userId);
      return res.status(200).json({ response });
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    const { body } = req;
    const response = await _userServices.create(body);
    try {
      return res.status(201).json({ data: response });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    const {
      params: { userId },
      body,
    } = req;
    const response = await _userServices.update(userId, body);
    try {
      return res.status(200).json({ msg: response });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    const { params } = req;
    const response = await _userServices.delete(params.userId);
    try {
      return res.status(200).json({ response });
    } catch (error) {
      next(error);
    }
  }
};

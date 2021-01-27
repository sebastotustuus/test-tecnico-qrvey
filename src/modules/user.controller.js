const types = require('../utils/common');

let userServices = null;
let fileServices = null;

module.exports = class UserController {
  constructor({ serviceUser, serviceFile }) {
    fileServices = serviceFile;
    userServices = serviceUser;
  }

  async list(req, res, next) {
    try {
      const { accept = '' } = req.headers;
      const response = await userServices.getAll();
      if (types.includes(accept)) {
        const result = await fileServices.getFactoryMethod(accept, response, types);
        res.status(200).download(result);
        return;
      }
      res.status(200).json({ response });
      return;
    } catch (error) {
      next(error);
    }
  }

  async get(req, res, next) {
    const { params } = req;
    try {
      const response = await userServices.get(params.userId);
      return res.status(200).json({ response });
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    const { body } = req;
    const response = await userServices.create(body);
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
    const response = await userServices.update(userId, body);
    try {
      return res.status(200).json({ msg: response });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    const { params } = req;
    const response = await userServices.delete(params.userId);
    try {
      return res.status(200).json({ response });
    } catch (error) {
      next(error);
    }
  }
};

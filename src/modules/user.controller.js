const types = require('../utils/common');

let serviceUser = null;
let servicesFile = null;

module.exports = class UserController {
  constructor({ userServices, fileServices }) {
    servicesFile = fileServices;
    serviceUser = userServices;
  }

  async list(req, res, next) {
    try {
      const { accept = '' } = req.headers;
      const response = await serviceUser.getAll();
      if (types.includes(accept)) {
        const result = await servicesFile.getFactoryMethod(accept, response, types);
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
      const response = await serviceUser.get(params.userId);
      return res.status(200).json({ response });
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    const { body } = req;
    const response = await serviceUser.create(body);
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
    const response = await serviceUser.update(userId, body);
    try {
      return res.status(200).json({ msg: response });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    const { params } = req;
    const response = await serviceUser.delete(params.userId);
    try {
      return res.status(200).json({ response });
    } catch (error) {
      next(error);
    }
  }
};

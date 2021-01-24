const types = require('../utils/common');

let _userServices = null;
let _fileServices = null;

module.exports = class EmployeeController {
  constructor({ userServices, fileServices }) {
    _fileServices = fileServices;
    _userServices = userServices;
  }

  async list(req, res, next) {
    try {
      const { accept = '' } = req.headers;
      const response = await _userServices.getAll();
      if (accept === types.PDF) {
        const result = await _fileServices.generatePdf(response, 'template-pdf');
        return res.status(200).json(result);
      }
      
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

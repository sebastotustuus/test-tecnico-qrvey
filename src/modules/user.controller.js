const { getRelativeUrl } = require('../utils/reponses');

let serviceUser = null;
let servicesFile = null;

module.exports = class UserController {
  constructor({ userServices, fileServices }) {
    servicesFile = fileServices;
    serviceUser = userServices;
  }

  async list(req, res, next) {
    try {
      const response = await serviceUser.getAll();
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
      return res.status(200).json({ data: response });
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

  async pdf(req, res, next) {
    try {
      const response = await serviceUser.getAll();
      if (response.length > 0) {
        await servicesFile.generatePdf(response);
        res.status(200).json({
          statusCode: 200,
          message: '',
          relativeUrl: getRelativeUrl('users-table.pdf'),
        });
      } else {
        res.status(200).json({
          message: 'No existen usuarios creados para exportar el pdf',
        });
      }
    } catch (err) {
      next(err);
    }
  }

  async xlsx(req, res, next) {
    try {
      const response = await serviceUser.getAll();
      if (response.length > 0) {
        await servicesFile.exportXLS(response);
        res.status(200).json({
          statusCode: 200,
          message: '',
          relativeUrl: getRelativeUrl('users-excel.xlsx'),
        });
      } else {
        res.status(200).json({
          message: 'No existen usuarios creados para generar el reporte',
        });
      }
    } catch (err) {
      next(err);
    }
  }
};

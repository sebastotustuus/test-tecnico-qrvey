const {
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
} = require('../middlewares/validations/user.middleware');

module.exports = (router, { usersController }) => {
  router
    .get('/list', usersController.list)
    .get('/pdf', usersController.pdf)
    .get('/xls', usersController.xlsx)
    .get('/:userId', getOneUser, usersController.get)
    .post('/', createUser, usersController.create)
    .patch('/:userId', updateUser, usersController.update)
    .delete('/:userId', deleteUser, usersController.delete);

  return router;
};

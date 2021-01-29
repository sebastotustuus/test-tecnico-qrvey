const {
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
} = require('../middlewares/validations/user.middleware');

module.exports = (router, { usersController }) => {
  router
    .get('/users', usersController.list)
    .get('/users/pdf', usersController.pdf)
    .get('/users/xls', usersController.xlsx)
    .get('/user/:userId', getOneUser, usersController.get)
    .post('/user', createUser, usersController.create)
    .patch('/user/:userId', updateUser, usersController.update)
    .delete('/user/:userId', deleteUser, usersController.delete);

  return router;
};

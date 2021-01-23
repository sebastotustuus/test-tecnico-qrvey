module.exports = (router, { usersController }) => {
  router
    .get('/', usersController.list)
    .get('/user/:userId', usersController.get)
    .post('/', usersController.create)
    .patch('/user/:userId', usersController.update)
    .delete('/user/:userId', usersController.delete);
  return router;
};

const { handleValidation } = require('../middlewares/validate');
const {
  createUserSchema,
  updateUserSchema,
  userIdSchema,
} = require('../middlewares/schema/user.schema');

module.exports = (router, { usersController }) => {
  router
    .get('/list', usersController.list)
    .get(
      '/:userId',
      handleValidation({ userId: userIdSchema }, 'params'),
      usersController.get,
    )
    .post('/', handleValidation(createUserSchema), usersController.create)
    .patch(
      '/:userId',
      [
        handleValidation(updateUserSchema),
        handleValidation({ userId: userIdSchema }, 'params'),
      ],
      usersController.update,
    )
    .delete(
      '/:userId',
      handleValidation({ userId: userIdSchema }, 'params'),
      usersController.delete,
    );
  return router;
};

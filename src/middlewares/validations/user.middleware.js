const { handleValidation } = require('../validate');
const {
  createUserSchema,
  updateUserSchema,
  userIdSchema,
} = require('../schema/user.schema');

const createUser = [handleValidation(createUserSchema)];
const getOneUser = [handleValidation({ userId: userIdSchema }, 'params')];
const updateUser = [
  handleValidation(updateUserSchema),
  handleValidation({ userId: userIdSchema }, 'params'),
];
const deleteUser = [handleValidation({ userId: userIdSchema }, 'params')];

module.exports = {
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
};

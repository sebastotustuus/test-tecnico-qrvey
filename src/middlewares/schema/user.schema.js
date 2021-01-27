const joi = require('joi');

const userIdSchema = joi.string().regex(/^[0-9a-fA]{24}$/);
const nameSchema = joi.string().min(3).max(80);
const userNameSchema = joi.string().min(3).max(80);
const emailSchema = joi.string().email({
  minDomainSegments: 2,
  tlds: {
    allow: ['com'],
  },
});
const companySchema = joi
  .object({
    name: joi.string().min(5).max(80),
    position: joi.string().min(5).max(80),
  })
  .length(2);

const createUserSchema = {
  name: nameSchema.required(),
  username: userNameSchema.required(),
  email: emailSchema.required(),
  company: companySchema.required(),
};

const updateUserSchema = {
  name: nameSchema,
  username: userNameSchema,
  email: emailSchema,
  company: companySchema,
};

module.exports = {
  createUserSchema,
  userIdSchema,
  updateUserSchema,
};

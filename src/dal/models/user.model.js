const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: String,
    username: String,
    email: String,
    company: {
      name: String,
      position: String,
    },
  },
  { timestamps: true },
);

module.exports = model('User', userSchema);

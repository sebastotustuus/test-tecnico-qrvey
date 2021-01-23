module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'prettier'],
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'no-console': 'warn',
    'comma-dangle': ['error', { objects: 'only-multiline' }],
  },
};

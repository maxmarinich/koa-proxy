module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  parser: '@babel/eslint-parser',
  rules: {
    'no-console': 'off',
    'no-restricted-syntax': ['error', "BinaryExpression[operator='in']"],
    strict: ['error', 'never'],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
  },
};

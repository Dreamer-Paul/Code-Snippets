const path = require('path');

module.exports = {
  env: {
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: [path.resolve(__dirname, 'tsconfig.eslint.json')],
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb/base',
    'airbnb-typescript/base',
    'airbnb/hooks',
  ],
  rules: {
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        ts: 'never',
        '': 'never',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^[A-Z]',
          match: true,
        },
      },
    ],
    'max-len': [
      'error',
      {
        code: 130,
      },
    ],
    'object-curly-newline': [
      'error',
      {
        ImportDeclaration: {
          multiline: true,
        },
        ExportDeclaration: {
          multiline: true,
        },
      },
    ],
  },
  ignorePatterns: ['node_modules/', 'dist/'],
};

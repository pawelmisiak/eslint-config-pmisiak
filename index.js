const prettier = require('./lib/prettier.js');

module.exports = {
   env: {
      browser: true,
      commonjs: true,
      es2021: true,
      node: true,
      jest: true,
   },
   parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
         jsx: true,
      },
   },
   plugins: ['simple-import-sort', 'import'],
   rules: {
      ...prettier,
   },
   settings: {
      react: {
         // Tells eslint-plugin-react to automatically detect the version of React to use
         version: 'detect',
      },
   },
};

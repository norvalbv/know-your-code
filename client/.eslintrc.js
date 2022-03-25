module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'react-app',
    'react-app/jest',
    'prettier'
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': [
      'error',
      { endOfLine: 'auto' },
      { usePrettierrc: true }
    ], // Use our .prettierrc file as source
    'react/react-in-jsx-scope': 'off'
  }
};

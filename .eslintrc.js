module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  root: true,
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    // JavaScript rules
    'no-var': 'error',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-case-declarations': 'off',
    'quote-props': ['warn', 'as-needed'],
    'import/prefer-default-export': 'off',
    // TypeScript rules
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    // React rules
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['ts', 'tsx'],
      },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    'no-console': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}

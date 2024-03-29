const prettierConfig = require('./.prettierrc.js')

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['unicorn', 'prettier', 'react'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@next/next/no-title-in-document-head': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'prefer-spread': 'off',
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArrowFunction: true,
        allowAnonymousFunction: true,
        allowCallExpression: true,
        allowObject: true
      }
    ]
  }
}

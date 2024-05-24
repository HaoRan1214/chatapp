module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'cypress/globals': true, // 添加 Cypress 环境
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended', // 添加 React hooks 插件
    'plugin:@typescript-eslint/recommended',
    'plugin:cypress/recommended', // 添加 Cypress 推荐配置
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks', // 添加 React hooks 插件
    '@typescript-eslint',
    'cypress', // 添加 Cypress 插件
  ],
  settings: {
    react: {
      version: 'detect', // 自动检测 React 版本
    },
  },
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    },
  ],
};

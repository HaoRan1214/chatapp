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
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:cypress/recommended', // 添加 Cypress 推荐配置
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'cypress', // 添加 Cypress 插件
  ],
  settings: {
    react: {
      version: 'detect',
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
    {
      files: ['tailwind.config.js'],
      env: {
        node: true, // 为 tailwind.config.js 文件设置 Node.js 环境
      },
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};

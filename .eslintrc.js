module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },

  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    requireConfigFile: false,
  },

  extends: ['@nuxtjs', 'prettier'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'vue/multi-word-component-names': 'off',
  },
}

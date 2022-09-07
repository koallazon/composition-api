module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': 0,
    'no-unused-vars': 0,
    'vue/multi-word-component-names': 0,
  },
}

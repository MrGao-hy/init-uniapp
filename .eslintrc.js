module.exports = {
    root: true,
    env: {
        browser: true,
        es2022: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2022,
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        '@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        'prettier',                     // 关闭与 Prettier 冲突的规则
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        // 代码风格
        'prettier/prettier': 'error',
        semi: 'off',                    // Prettier 已处理
        quotes: 'off',                  // Prettier 已处理

        // TypeScript 专用
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/prefer-const': 'error',

        // Vue 专用
        'vue/multi-word-component-names': 'off',
        'vue/no-multiple-template-root': 'off', // UniApp 允许多个根节点
    },
};
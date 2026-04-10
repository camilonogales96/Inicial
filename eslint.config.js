const js = require('@eslint/js');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  // Configuración base recomendada por ESLint
  js.configs.recommended,

  // Configuración para Prettier
  prettierConfig,

  // Tu configuración personalizada
  {
    files: ['**/*.js', '**/*.ts'],
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        console: 'readonly',
        process: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        Buffer: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        setImmediate: 'readonly',
        clearImmediate: 'readonly',
      },
    },
    rules: {
      // Reglas de Prettier
      'prettier/prettier': 'error',

      // Reglas personalizadas (equivalentes a tu .eslintrc anterior)
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-explicit-any': 'off', // TypeScript-specific, omitir si no usas TS

      // Orden de imports (simplificado para ESLint 9)
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],
    },
  },

  // Ignorar archivos (reemplaza a .eslintignore)
  {
    ignores: ['node_modules/**', 'dist/**', 'coverage/**', '*.log', '.husky/**'],
  },
];

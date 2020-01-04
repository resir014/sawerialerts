module.exports = {
  root: true,
  extends: ['blvd/react', 'prettier', 'prettier/@typescript-eslint', 'prettier/react', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
    'prettier/prettier': 'error'
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',

        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true
      },
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
        // require or disallow a space immediately following the // or /* in a comment
        // https://eslint.org/docs/rules/spaced-comment
        'spaced-comment': [
          'error',
          'always',
          {
            line: {
              exceptions: ['-', '+'],
              markers: ['=', '!', '#region', '#endregion', '/'] // space here to support sprockets directives and typescript reference comments
            },
            block: {
              exceptions: ['-', '+'],
              markers: ['=', '!', '#region', '#endregion', ':', '::'], // space here to support sprockets directives and flow comment types
              balanced: true
            }
          }
        ],
        'import/no-unresolved': 'off',
        'react/jsx-props-no-spreading': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/no-explicit-any': 'off'
      }
    },
    {
      files: ['.eslintrc.js', '*.config.js'],
      parserOptions: { sourceType: 'script' },
      env: { node: true }
    }
  ]
}

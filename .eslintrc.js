module.exports = {
    env: {
      es6: true,
    },
    extends: [
      'airbnb',
      'prettier',
      'prettier/react'
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
      __DEV__: 'readonly'
    },
    parser: 'babel-eslint',
    parserOptions: {
      ecmaFeatures: {
        tsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
      'prettier'
    ],
    rules: {
      'prettier/prettier': 'error',
      'react/tsx-filename-extension': [
        'warn',
        {
          extensions: ['.tsx', '.ts']
        }
      ],
      'import/prefer-default-export': 'off',
      'react/state-in-constructor': 'off',
      'react/static-property-placement': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/prop-types': 'off',
      'no-param-reassign': 'off',
      'no-console': 'off'
    },
    
  };
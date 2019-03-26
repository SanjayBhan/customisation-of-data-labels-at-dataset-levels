module.exports = {
  parser: 'babel-eslint',
  env: {
    amd: true,
    browser: true,
    jasmine: true,
    jest: true
  },
  globals: {
    HAS_MAPS: true,
    IS_IE8_BUILD: true,
    'FusionCharts': true
  },
  extends: [
    'standard',
    'plugin:import/errors'
  ],
  rules: {
    'no-useless-escape': 'warn',
    'standard/no-callback-literal': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'no-return-assign': 'warn',
    'no-cond-assign': ['warn', 'except-parens'],
    'no-magic-numbers': [
      'warn',
      {
        ignoreArrayIndexes: true,
        ignore: [-1, 0, 1, 2, 3, 100, 10, 0.5]
      }
    ],
    'operator-linebreak': ['error', 'after'],
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: ['getDSdef', 'getDSGroupdef', 'getName', 'getType', 'getDSType']
      }
    ],
    'valid-typeof': ['error', { requireStringLiterals: false }],
    'dot-notation': ['error', { allowKeywords: false }],
    'block-scoped-var': 'error',
    'array-callback-return': 'error',
    'no-alert': 'error',
    'no-empty-function': 'error',
    'no-loop-func': 'error',
    'no-useless-concat': 'error',
    radix: 'error',
    'no-catch-shadow': 'error',
    'no-shadow': ['error', { allow: ['err', 'error'] }],
    semi: ['error', 'always'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'one-var': ['error', { initialized: 'always', uninitialized: 'always' }]
  }
};

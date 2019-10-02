module.exports = {
  // Plugins
  plugins: ['wyze', 'unicorn', 'react-perf'],

  // Extends
  extends: [
    'react-app', // create-react-app config
    'standard-jsx', // JS Standard JSX
    'standard', // JS Standard
    'plugin:unicorn/recommended', // unicorn
    'plugin:prettier/recommended' // prettier overrides
  ],

  // Rule Overrides
  rules: {
    // Generic JS

    'prefer-const': 2,
    'arrow-body-style': [2, 'as-needed'],
    curly: [2, 'multi'],
    'sort-imports': 2,
    'padding-line-between-statements': [
      2,
      { blankLine: 'never', prev: 'import', next: 'import' }
    ],
    'sort-keys': 2,
    'no-useless-concat': 2,
    'prefer-template': 2,

    // wyze
    'wyze/sort-destructuring-keys': 2,

    // unicorn
    'unicorn/no-fn-reference-in-iterator': 0, // Allows [].map(func)
    'unicorn/catch-error-name': [2, { name: 'err' }],

    // import
    'import/no-unresolved': 2,
    'import/named': 2,
    'import/default': 2,
    'import/namespace': 2,
    'import/no-named-as-default': 2,
    'import/no-named-as-default-member': 2,
    'import/no-extraneous-dependencies': 2,
    'import/newline-after-import': 2,
    'import/no-named-default': 2,

    // React JSX
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js']
      }
    ],
    'react/jsx-no-bind': 2,
    'react/jsx-indent': 0,
    'react/jsx-sort-props': 2,
    'react/jsx-curly-brace-presence': [2, 'never'],

    // React
    'react/prefer-stateless-function': 2,
    'react/destructuring-assignment': [2, 'always'],
    'react/prop-types': 2,
    'react/forbid-prop-types': 2,
    'react/no-unused-prop-types': 2,
    'react/require-default-props': 2,
    'react/default-props-match-prop-types': 2,

    // React Perf
    'react-perf/jsx-no-new-object-as-prop': 2,
    'react-perf/jsx-no-new-array-as-prop': 2,
    'react-perf/jsx-no-new-function-as-prop': 2,

    // JS Standard
    'standard/computed-property-even-spacing': 0,
    'jsx-a11y/href-no-hash': 0, // Buggy
    'max-len': ['error', { code: 140 }],

    // JSDoc
    'require-jsdoc': [
      2,
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false
        }
      }
    ],
    'valid-jsdoc': [
      2,
      {
        prefer: {
          arg: 'param',
          argument: 'param',
          class: 'class',
          return: 'returns',
          virtual: 'abstract'
        },
        preferType: {
          Boolean: 'boolean',
          Number: 'number',
          Object: 'object',
          String: 'string'
        },
        requireReturn: false,
        requireReturnType: true,
        matchDescription: '.+',
        requireParamDescription: true,
        requireReturnDescription: true
      }
    ],

    // prettier
    'prettier/prettier': [
      2,
      {
        semi: false,
        singleQuote: true
      }
    ]
  }
}
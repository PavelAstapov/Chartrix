module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
				'airbnb',
        'prettier',
        'airbnb-typescript'
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        'prettier',
        'react-hooks'
    ],
    rules: {
        // Padding rules
        'no-multiple-empty-lines': [2, { max: 1 }],
        'padding-line-between-statements': [
          2,
          { blankLine: 'always', prev: '*', next: ['if', 'return'] },
          { blankLine: 'always', prev: 'block-like', next: '*' },
          { blankLine: 'always', prev: ['const', 'let'], next: '*' },
          { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
        ],
        'lines-between-class-members': [2, 'always', { exceptAfterSingleLine: true }],
        // Import rules
        'no-restricted-imports': ['error', 'echarts', 'echarts-for-react'],
        // 'import/no-extraneous-dependencies': [2, { devDependencies: true }],
        // 'import/order': [
        //   2,
        //   {
        //     groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index'],
        //     'newlines-between': 'always',
        //   },
        // ],
        'import/no-named-as-default': 0,
        'import/no-named-as-default-member': 0,
        'import/prefer-default-export': 0,
        'import/extensions': [
          2,
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
        // Prettier rules
        'prettier/prettier': [
          2,
          {
            trailingComma: 'all',
            singleQuote: true,
            printWidth: 120,
            endOfLine: 'auto',
            useTabs: true,
            useSpaces: true,
          },
        ],
        // Length rules
        'max-len': [
          2,
          {
            code: 120,
            tabWidth: 2,
            comments: 120,
            ignoreComments: false,
            ignoreTrailingComments: true,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true,
          },
        ],
        // React rules
        'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
        'react/jsx-uses-react': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-no-bind': [
          2,
          {
            ignoreDOMComponents: true,
            ignoreRefs: false,
            allowArrowFunctions: true,
            allowFunctions: false,
            allowBind: false,
          },
        ],
        'react/jsx-props-no-spreading': [0],
        'react/require-default-props': [0],
        // 'react-hooks/rules-of-hooks': [2],
        // 'react-hooks/exhaustive-deps': [1],
        'react/state-in-constructor': [0],
        'react/function-component-definition': [0],
        // JSX a11y rules
        'jsx-a11y/anchor-is-valid': [
          0,
          {
            components: ['a'],
            specialLink: ['href'],
          },
        ],
        'jsx-a11y/click-events-have-key-events': [0],
        'jsx-a11y/no-static-element-interactions': [0],
        // Redux toolkit rules
        'no-param-reassign': ['error', { props: false }],
        // Common rules
        "@typescript-eslint/explicit-function-return-type": 0,
        '@typescript-eslint/semi': [0],
        "@typescript-eslint/strict-boolean-expressions": 0,
        "@typescript-eslint/indent": 0,
        // '@typescript-eslint/no-shadow': 2,
        'no-shadow': 0,
        // '@typescript-eslint/no-use-before-define': 2,
        'no-use-before-define': 0,
        // '@typescript-eslint/no-unused-vars': [2, { ignoreRestSiblings: true }],
        'no-unused-vars': 0,
        'no-undef': 0,
        'no-bitwise': 0,
        'consistent-return': 0,
        'no-plusplus': 0,
        // disable camelcase as we use properties from drupal in snake case
        camelcase: 'off',

        'import/no-extraneous-dependencies': [
          "error",
          {"devDependencies": true}
        ],
        'import/order': 'warn',
        // 'react/jsx-filename-extension': 'warn',
        'react-hooks/rules-of-hooks': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/no-shadow': 'warn',
        '@typescript-eslint/no-use-before-define': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',

        //
        'array-callback-return': 'warn',
        'react/no-danger': 'warn',
        'react/jsx-no-useless-fragment': 'warn',
        eqeqeq: 'warn',
        'react/no-array-index-key': 'warn',
        'react/button-has-type': 'warn',
        'react/no-children-prop': 'warn',
        'no-restricted-globals': 'warn',
        'import/no-unresolved': 'warn',
        'react/jsx-pascal-case': 'warn',
        'react/destructuring-assignment': 'warn',
        'react/no-unused-prop-types': 'warn',
        'react/prop-types': 'warn',
        'react/no-unescaped-entities': 'warn',
        'no-empty-pattern': 'warn',
        'jsx-a11y/no-noninteractive-element-interactions': 'warn',
        'no-nested-ternary': 'warn',
        'no-return-assign': 'warn',
        'no-unused-expressions': 'warn',
        'no-irregular-whitespace': 'warn',
        'no-template-curly-in-string': 'warn',
        'react/forbid-prop-types': 'warn',
        'jsx-a11y/html-has-lang': 'warn',
        radix: 'warn',
        'func-names': 'warn',
        'no-useless-escape': 'warn',
        'no-control-regex': 'warn',
        'react/no-unknown-property': 'warn',
        // 'no-redeclare': 'off', 1
        'no-unsafe-optional-chaining': 'warn',
        // 'prefer-regex-literals': 'off', 1
        // 'jsx-a11y/no-noninteractive-tabindex': 'off', 2
      },
}

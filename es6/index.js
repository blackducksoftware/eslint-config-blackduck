modules.exports = {
    extends: 'blackduck',
    env: {
        'es6': true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
    },
    rules: {
        'arrow-body-style': [
            'error',
            'as-needed'
        ],

        'arrow-parens': [
            'error',
            'as-needed'
        ],

        'arrow-spacing': [
            'warn',
            {
                before: false,
                after: true
            }
        ],

        'class-methods-use-this': 'off',

        'constructor-super': 'error',

        // valid: function* foo() { .. }
        'generator-star-spacing': [
            'warn',
            'after'
        ],

        'jsx-quotes': [
            'warn',
            'prefer-single'
        ],

        'no-await-in-loop': 'error',

        'no-class-assign': 'error',

        'no-confusing-arrow': [
            'warn',
            {
                allowParens: true
            }
        ],

        'no-const-assign': 'error',

        // disallow duplicate class members
        'no-dupe-class-members': 'error',

        'no-duplicate-imports': 'error',

        // disallow empty destructuring patterns
        'no-empty-pattern': 'warn',

        'no-invalid-this': 'warn',

        // disallow new operators with the Symbol object
        // Symbol is not intended to be used with the new operator, but to be called as a function.
        'no-new-symbol': 'error',

        'no-restricted-imports': 'off',

        // disallow unnecessary return await
        'no-return-await': 'warn',

        'no-template-curly-in-string': 'off',

        'no-this-before-super': 'error',

        'no-useless-computed-key': 'warn',

        'no-useless-constructor': 'warn',

        'no-useless-rename': 'warn',

        'no-var': 'warn',

        'object-shorthand': 'warn',

        'prefer-arrow-callback': 'warn',

        'prefer-const': 'warn',

        'prefer-destructuring': 'warn',

        'prefer-numeric-literals': 'warn',

        'prefer-promise-reject-errors': 'warn',

        'prefer-rest-params': 'error',

        'prefer-spread': 'warn',

        'prefer-template': 'warn',

        'require-yield': 'error',

        'rest-spread-spacing': [
            'warn',
            'never'
        ],

        'sort-imports': 'off',

        'symbol-description': 'warn',

        'template-tag-spacing': [
            'warn',
            'never'
        ],

        'template-curly-spacing': [
            'warn',
            'always'
        ],

        'yield-star-spacing': 'warn'
    }
};

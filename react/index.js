module.exports = {
    "extends": [
        'blackduck/es6'
    ],
    "env": {
        "browser": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "react"
    ],
    "rules": {
        // https://github.com/yannickcr/eslint-plugin-react

        "react/display-name": "warn",

        "react/forbid-component-props": "warn",

        "react/forbid-elements": "off",

        "react/forbid-prop-types": [
            "warn",
            {
                "forbid": ["any", "array"]
            }
        ],

        "react/forbid-foreign-prop-types": "off",

        "react/no-array-index-key": "warn",

        "react/no-children-prop": "warn",

        "react/no-danger": "error",

        "react/no-danger-with-children": "error",

        "react/no-deprecated": "warn",

        "react/no-did-mount-set-state": "warn",

        "react/no-did-update-set-state": "warn",

        "react/no-direct-mutation-state": "error",

        "react/no-find-dom-node": "warn",

        "react/no-is-mounted": "warn",

        "react/no-multi-comp": "warn",

        "react/no-render-return-value": "warn",

        "react/no-set-state": "off",

        "react/no-string-refs": "warn",

        "react/no-unescaped-entities": "warn",

        "react/no-unknown-property": "warn",

        "react/no-unused-prop-types": "warn",

        "react/no-will-update-set-state": "warn",

        "react/prefer-es6-class": [
            "warn",
            "always"
        ],

        "react/prefer-stateless-function": "warn",

        "react/prop-types": "warn",

        "react/react-in-jsx-scope": "error",

        "react/require-default-props": "warn",

        "react/require-optimization": "warn",

        "react/require-render-return": "error",

        "react/self-closing-comp": "warn",

        "react/sort-comp": "warn",

        "react/sort-prop-types": "off",

        "react/style-prop-object": "warn",

        "react/void-dom-elements-no-children": "error",

        "react/jsx-boolean-value": "warn",

        "react/jsx-closing-bracket-location": "warn",

        "react/jsx-curly-spacing": [
            "warn",
            "never"
        ],

        "react/jsx-equals-spacing": [
            "warn",
            "never"
        ],

        "react/jsx-filename-extension": "error",

        "react/jsx-first-prop-new-line": [
            "warn",
            "multiline"
        ],

        "react/jsx-handler-names": "off",

        "react/jsx-indent": "warn",

        "react/jsx-indent-props": "warn",

        "react/jsx-key": "error",

        "react/jsx-max-props-per-line": [
            "warn",
            {
                "maximum": 1,
                "when": "multiline"
            }
        ],

        "react/jsx-no-bind": "error",

        "react/jsx-no-comment-textnodes": "error",

        "react/jsx-no-duplicate-props": "error",

        "react/jsx-no-literals": "off",

        "react/jsx-no-target-blank": "error",

        "react/jsx-no-undef": "error",

        "react/jsx-pascal-case": "warn",

        "react/jsx-sort-props": "off",

        "react/jsx-tag-spacing": "warn",

        "react/jsx-uses-react": "warn",

        "react/jsx-uses-vars": "warn",

        "react/jsx-wrap-multilines": "warn"
    }
};

module.exports = {
    "env": {
        "browser": true,
        "es2022": true,
        "jest": true
    },

    "extends": [
        "airbnb-typescript",
        "airbnb/hooks",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:@typescript-eslint/recommended",
        "plugin:jest/recommended",
        "plugin:prettier/recommended",
        "plugin:import/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [ "react", "@typescript-eslint", "jest", "import", "prettier" ],
    "rules": {
        "no-alert": "warn",
        "no-console": "warn",
        "no-unused-vars": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "linebreak-style": "off",
        "prefer-promise-reject-errors": ["error", {"allowEmptyReject": true}],
        "prettier/prettier": "error",
        "react/prop-types": "off",
        "@typescript-eslint/no-unused-vars": ["warn"],
        "default-param-last": "off",
        "@typescript-eslint/default-param-last": "off",
        "react/display-name": "off",
    },
    "settings": {
        "import/resolver": {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src/'],
            }
        },
        "react": {
            "createClass": "createReactClass",
            "pragma": "React",
            "fragment": "Fragment",
            "version": "detect",
            "flowVersion": "0.53"
        },
        "propWrapperFunctions": [
            "forbidExtraProps",
            {"property": "freeze", "object": "Object"},
            {"property": "myFavoriteWrapper"},
            {"property": "forbidExtraProps", "exact": true}
        ],
        "componentWrapperFunctions": [
            "observer",
            {"property": "styled"},
            {"property": "observer", "object": "Mobx"},
            {"property": "observer", "object": "<pragma>"}
        ],
        "formComponents": [
            "CustomForm",
            {"name": "Form", "formAttribute": "endpoint"}
        ],
        "linkComponents": [
            "Hyperlink",
            {"name": "Link", "linkAttribute": "to"}
        ]
    }
}
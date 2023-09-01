module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["plugin:react/recommended", "airbnb"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        quotes: [2, "double"],
        "linebreak-style": "off",
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        indent: [2, 4],
        "react/jsx-filename-extension": [
            2,
            { extensions: [".js", ".ts", ".jsx", ".tsx"] },
        ],
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "no-unused-vars": "warn",
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "warn",
        "react/function-component-definition": "off",
        "no-shadow": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "no-underscore-dangle": "off",
        "max-len": ["error", { code: 140 }],
        "prefer-const": "error",
        "no-console": "warn",
        "react/button-has-type": "off",
        "arrow-body-style": "off",
        "object-curly-newline": "off",
        "no-useless-concat": "off",
        "object-shorthand": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "no-confusing-arrow": "off",
        "implicit-arrow-linebreak": "off",
        "function-paren-newline": "off",
        "operator-linebreak": "off",
        "no-param-reassign": "off",
        "react/self-closing-comp": "off",
        "jsx-a11y/label-has-associated-control": [2, {
            labelComponents: ["CustomInputLabel"],
            labelAttributes: ["label"],
            controlComponents: ["CustomInput"],
            depth: 3,
        }],
    },
    globals: {
        __IS_DEV__: true,
    },
};

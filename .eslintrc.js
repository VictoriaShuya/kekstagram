module.exports = {
    env: {
        browser: true,
        es2022: true,
    },
    extends: ["airbnb-base", "prettier"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "module",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "2022",
        sourceType: "module",
    },
    plugins: ["prettier"],
    rules: {
    },
    globals: {
        noUiSlider: "readonly",
        pristine: "readonly",
    },
};

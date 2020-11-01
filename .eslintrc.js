module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
  plugins: [
    "@typescript-eslint",
    "eslint-plugin-react",
    "eslint-plugin-react-hooks",
  ],
  extends: [
    // "airbnb-typescript",
    "prettier",
    "prettier/@typescript-eslint",
  ],
};

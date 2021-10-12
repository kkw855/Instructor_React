module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  // ESLint 가 아래에 명시한 파일은 린팅하지 않는다.
  ignorePatterns: ["webpack.*"],
  rules: {
    "linebreak-style": ["error", "unix"],
  },
};

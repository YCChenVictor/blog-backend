// eslint.config.js
export default [
  {
    files: ["src/**/*.ts"],
    ignores: ["**/*.config.js"],
    rules: {
      "max-len": ["error", { "code": 80 }],
      "quotes": [2, "single", { "avoidEscape": true }],
      "no-unused-vars": "error",
      "semi": "error",
      "prefer-const": "error"
    }
  }
];

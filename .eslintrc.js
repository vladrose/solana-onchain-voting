module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  /* Ignore all config files */
  ignorePatterns: [".eslintrc.js", "dist", "target"],
  parser: "@typescript-eslint/parser",
  rules: {
    // Common
    "no-console": "warn",
    // TypeScript
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-explicit-any": "warn",
  },
}

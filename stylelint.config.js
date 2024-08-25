/** @type {import('stylelint').Config} */
export default {
  extends: "stylelint-config-standard",
  plugins: ["stylelint-prettier"],
  rules: {
    "block-no-empty": true,
    "color-hex-length": "short",
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["extends", "tailwind"],
      },
    ],
  },
};

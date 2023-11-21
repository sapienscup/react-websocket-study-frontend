module.exports = {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-sass-guidelines',
    'stylelint-config-prettier',
    'stylelint-prettier/recommended'
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['use', 'each', 'at', 'for', 'tailwind', 'apply']
      }
    ],
    'selector-class-pattern': [null],
    'custom-property-pattern': [null],
    'no-descending-specificity': [null],
    'scss/double-slash-comment-whitespace-inside': [null],
    'no-empty-source': [null],
    'no-duplicate-selectors': [null]
  }
}

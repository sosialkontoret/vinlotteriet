module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'unit-allowed-list': ['em', 'rem', 'px', '%', 'vh', 'vw', 's', 'deg', 'rad', 'fr'],
    'no-empty-source': null,
    'at-rule-no-unknown': [true, {
      'ignoreAtRules': [
        'extend',
        'use',
        'forward',
        'include',
        'mixin',
        'each',
        'function',
        'for',
        'return',
        'if',
      ],
    }],
    'no-descending-specificity': null,
  },
}

module.exports = {
  "rules": {
    "quotes": [2, "single", "avoid-escape"],
    "no-use-before-define": [2, "nofunc"],
    "no-unused-expressions": 0,
    "strict": [2, "global"],
    "new-cap": [2, {
      "newIsCap": true,
      "capIsNew": true
    }],
    "comma-dangle": [2, "never"],
    "max-statements": [2, 30],
    "max-len": [2, 120, 2],
    "max-depth": [2, 4],
    "max-nested-callbacks": [2, 5],
    "indent": [2, 2, {"SwitchCase": 1}],
    "brace-style": [2, "1tbs"],

    // possible errors
    "space-infix-ops": 2,
    "no-cond-assign": 2,
    "no-console": 2,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-process-env": 0,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-empty": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 0,
    "no-extra-parens": 0,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-negated-in-lhs": 2,
    "no-obj-calls": 2,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 2,
    "no-unreachable": 2,
    "no-unexpected-multiline": 2,
    "use-isnan": 2,
    "valid-jsdoc": [2, {"requireReturn": false}],
    "valid-typeof": 2,

    // best practices
    "accessor-pairs": 2,
    "no-var": 2,
    "prefer-const": 2,
    "complexity": [2, 5],
    "consistent-return": 2,
    "curly": 2,
    "default-case": 2,
    "dot-notation": 2,
    "dot-location": [2, "property"],
    "eqeqeq": 2,
    "guard-for-in": 2,
    "no-alert": 2,
    "no-caller": 2,
    "no-div-regex": 2,
    "no-else-return": 0,
    "no-labels": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-implied-eval": 2,
    "no-invalid-this": 2,
    "no-iterator": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-new": 2,
    "no-octal-escape": 2,
    "no-octal": 2,
    "no-param-reassign": 0,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-void": 2,
    "no-warning-comments": [1, {"terms": ["fixme"], "location": "anywhere"}],
    "no-with": 0,
    "radix": 2,
    "vars-on-top": 2,
    "wrap-iife": [2, "outside"],
    "yoda": 2,

    // variables
    "no-catch-shadow": 2,
    "no-delete-var": 2,
    "no-shadow-restricted-names": 2,
    "no-shadow": 2,
    "no-undef-init": 2,
    "no-undef": 2,
    "no-undefined": 0,
    "no-unused-vars": [1],

    // stylistic
    "array-bracket-spacing": [2, "always"],
    "camelcase": [2, {"properties": "always"}],
    "comma-spacing": [2, {"before": false, "after": true}],
    "comma-style": [2, "last"],
    "computed-property-spacing": [2, "never"],
    "consistent-this": 0,
    "eol-last": 2,
    "func-names": 0,
    "func-style": [2, "declaration"],
    "key-spacing": [2, {"beforeColon": false, "afterColon": true}],
    "lines-around-comment": 0,
    "linebreak-style": [2, "unix"],
    "new-parens": 2,
    "newline-after-var": 0,
    "no-array-constructor": 2,
    "no-continue": 2,
    "no-inline-comments": 0,
    "no-lonely-if": 2,
    "no-multiple-empty-lines": 0,
    "no-nested-ternary": 2,
    "no-new-object": 2,
    "no-spaced-func": 2,
    "no-ternary": 0,
    "no-trailing-spaces": [2, {"skipBlankLines": true}],
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": 2,
    "object-curly-spacing": [2, "always"],
    "one-var": [2, {"uninitialized": "always", "initialized": "never"}],
    "operator-assignment": 0, // readability on a case-by-case basis
    "operator-linebreak": [2, "after"],
    "padded-blocks": 0,
    "quote-props": [2, "as-needed"],
    "semi-spacing": [2, {"before": false, "after": true}],
    "semi": [2, "always"],
    "sort-vars": 0,
    "space-after-keywords": [2, "always"],
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [2, "never"],
    "space-in-parens": [2, "never"],
    "space-return-throw-case": 2,
    "space-unary-ops": [2, {"words": true, "nonwords": false}],
    "spaced-comment": [1, "always"],
    "wrap-regex": 0,
    "constructor-super": 2,
    "generator-star-spacing": [2, {"before": false, "after": true}],
    "no-this-before-super": 2,
    "object-shorthand": [2, "always"], // methods are optional so you can specify a name if you want
    "max-params": [2, 5],
    "no-bitwise": 2,
    "no-plusplus": 0
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "ecmaFeatures": {
    "modules": true
  },
  "globals": {
  }
};

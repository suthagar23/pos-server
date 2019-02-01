module.exports = {
  "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2017,
    },
    "env": {
        "es6": true,
        "amd": true,
        "node": true,
        "commonjs": true,
        "jest": true,
        "browser": true
    },
    "globals": {
      "exampleGlobalVariable": true,
      "_": false
    },
    // "extends": "eslint:recommended",
    "extends": "airbnb-base",
    "rules": {
      "eqeqeq": 1,
      "no-console": "off",
      "indent": ["error", 2],
      "quotes": ["error","single"],
      "semi": [2,"always"],
      "linebreak-style": ["error","unix"],
      "no-underscore-dangle": [2, { "allowAfterThis": true }],
      "no-param-reassign": ["error", { "props": false }]
    },
    "plugins": [
    ]
  };
  
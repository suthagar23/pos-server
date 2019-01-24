module.exports = {
    "parserOptions": {
        "ecmaVersion": 2017
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
      "exampleGlobalVariable": true
    },
    // "extends": "eslint:recommended",
    "extends": "airbnb-base",
    "rules": {
      "eqeqeq": 1,
      "no-console": "off",
      "indent": ["error", 2],
      "quotes": ["error","single"],
      "semi": [2,"always"],
      "linebreak-style": ["error","unix"]
    },
    "plugins": [
    ]
  };
  
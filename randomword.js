const _ = require("lodash");
var Words = {
  //randombetween(1, 9)

  /**
   * Returns x raised to the n-th power.
   * randombetween(1, 9)
   * @param {word} words array The number to raise.
   * @return generate number between min and max
   */
  randomword: function (words) {
    var randword = words[Math.floor(Math.random() * words.length)];
    return randword;
  },
};
module.exports = Words;

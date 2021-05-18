const _ = require("lodash");
var Maths = {
    //randombetween(1, 9)

    /**
   * Returns x raised to the n-th power.
   * randombetween(1, 9)
   * @param {min} min The number to raise.
   * @param {max} max The power, must be a natural number.
   * @return generate number between min and max
   */
    randombetween: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

}
module.exports = Maths;
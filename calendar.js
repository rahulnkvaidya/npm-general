const _ = require("lodash");
const moment = require("moment");

var calendar = {
     /**
   * @param {data} data The number to raise.
   * @return {callback} callback raised to the n-th power.
   */
  DateDay: function (date) {
    const date = moment("2021-04-29"); // Thursday Feb 2015
    const dow = date.day();
    const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return(Days[dow]);
  }
}
module.exports = calendar;
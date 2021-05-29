const _ = require("lodash");
const moment = require("moment");

var calendar = {
     /**
   * @param {dt} "2021-04-29" The number to raise.
   * @return {callback} callback raised to the n-th power.
   */
  DateDay: function (dt) {
    const date = moment(dt); // Thursday Feb 2015
    const dow = date.day();
    const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return(Days[dow]);
  }
}
module.exports = calendar;
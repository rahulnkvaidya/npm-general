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
    const Days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return Days[dow];
  },
  /**
   * @param {TodayDay} 0 Sunday - 6 saturday The number to raise.
   * @return {callback} callback raised to the n-th power.
   */
  AfterDaysWhichDay: function (TodayDay, afterDays ) {
    var daysArray = ['Sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    var quotient = Math.floor(afterDays / 7);
    var resultDay = (afterDays - (quotient * 7));
    var result = daysArray[convert_positive(resultDay) + 1];
    return result;
  },
};
module.exports = calendar;

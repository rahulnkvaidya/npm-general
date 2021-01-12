const _ = require("lodash");
const moment = require("moment");

var time = {
  
  timestampConvert: function (arrayvalue) {
    ///// {  yyyymmdd: "2019-08-20",  ddmmyyyy: "20-08-2019" }
    dt = [];
    var count = arrayvalue.length - 1;
    var i;
    for (i = 0; i < arrayvalue.length; i++) {
      var val = new Date(arrayvalue[i]['dt']);
      var date = val.getDate();
      var month = val.getMonth() + 1;
      var year = val.getFullYear();
      if (month < 10) {
        month = '0' + month;
      }
      if (date < 10) {
        date = '0' + date;
      }
      dt.push({ yyyymmdd: year + '-' + month + '-' + date, ddmmyyyy: date + '-' + month + '-' + year })
      if (count == i) {
        return dt;
      }
    };
  },
  timestampConvertMobile: function (arrayvalue) {
    ///// { dt: "2019-08-20" }
    dt = [];
    var count = arrayvalue.length - 1;
    var i;
    for (i = 0; i < arrayvalue.length; i++) {
      var val = new Date(arrayvalue[i]['dt']);
      var date = val.getDate();
      var month = val.getMonth() + 1;
      var year = val.getFullYear();
      if (month < 10) {
        month = '0' + month;
      }
      if (date < 10) {
        date = '0' + date;
      }
      dt.push({ dt: year + '-' + month + '-' + date })
      if (count == i) {
        return dt;
      }
    };
  },
  thisyear: function () {
    var dt = new Date();
    var fullyear = dt.getFullYear();
    return fullyear;
  },
  thisdate: function () {
    var dt = new Date();
    var date = dt.getDate();
    if (date < 10) {
      date = '0' + date;
    };
    return date;
  },
  thismonthdigit: function () {
    var dt = new Date();
    var month = dt.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    return month;
  },
  thismonth: function () {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var d = new Date();
    var n = month[d.getMonth()];
    return n;
  },
  nowHhr: function () {
    var dt = new Date();
    var hrs = dt.getHours();
    return hrs;
  },
  nowMin: function () {
    var dt = new Date();
    var min = dt.getMinutes();
    return min;
  },
  nowSec: function () {
    var dt = new Date();
    var sec = dt.getSeconds();
    return sec;
  },
  formatDate: function (date) {
    /// unix time
    return moment.tz(date, "Asia/Kolkata").format('YYYY-MM-DD HH:mm:ss');
  },
  /// unix time without second
  formatDateYMDHM: function (date) {
    /// unix time without second
    var dt = moment(date);
    return dt.tz("Asia/Kolkata").format('YYYY-MM-DD HH:mm')
  },
  formatSitemapDate: function (date) {
    /// unix time
    return moment.tz(date, "Asia/Kolkata").format('YYYY-MM-DD');
  },
  AddDays: function (date, days) {
    date = moment(date).add(days, 'days');
    return moment(date).format('YYYY-MM-DD');
  },
  AddMin: function (date, min) {
    date = moment(date).add(min, 'minutes');
    return moment(date).format('YYYY-MM-DD HH:mm');
  },
  addDays: function (date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  },
}
module.exports = time;
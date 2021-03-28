const _ = require("lodash");
var file = {
  getfileextention: function (value) {
    var fileExtension = value.split('.').pop();
    console.log('file =', fileExtension);
    return fileExtension;
  },

}
module.exports = file;
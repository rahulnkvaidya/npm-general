var AWS = require("aws-sdk");
var uuid = require("uuid");

var rpsGeneral = {
  /**
   * Returns x raised to the n-th power.
   *
   * @param {data} data The number to raise.
   * @param {appid} appid The power, must be a natural number.
   * @param {key} appid The power, must be a natural number.
   * @return {callback} callback raised to the n-th power.
   */
  onesignalWebpush: function (data, appid, key, callback) {
    callback(data);
  },

  /**
   * Onesignal Android push callback responce.
   *
   * @param {data} data The number to raise.
   * @param {appid} appid The power, must be a natural number.
   * @param {key} appid The power, must be a natural number.
   * @return {callback} callback raised to the n-th power.
   */
  onesignalAndroidpush: function (data, appid, key, callback) {
    callback(data);
  },
  /**
   * Onesignal Android push callback responce.
   *
   * @param {DistributionId} DistributionId cloudfront Distribution Id.
   * @param {accessKeyId} accessKeyId string aws accesskey.
   * @param {secretAccessKey} secretAccessKey string aws secretAccessKey.
   * @param {region} region string aws region
   * @return {callback} callback return as JSON.
   */
  cloudFrontCacheReset: function (
    DistributionId,
    accessKeyId,
    secretAccessKey,
    region,
    callback
  ) {
    var cloudfront = new AWS.CloudFront({
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      region: region,
    });
    var params = {
      DistributionId: DistributionId,
      InvalidationBatch: {
        CallerReference: uuid.v4(),
        Paths: {
          Quantity: "1",
          Items: ["/*"],
        },
      },
    };
    cloudfront.createInvalidation(params, function (err, data) {
      if (err) {
        callback(err.stack);
      } else {
        callback(data);
      }
    });
  },
};

module.exports = rpsGeneral;

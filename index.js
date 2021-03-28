var AWS = require("aws-sdk");
var uuid = require("uuid");
const { v4: uuidv4 } = require("uuid");
var pagination = require('./pagination');
var time = require('./time');
var file = require('./file');

var rpsGeneral = {
  file,
  time,
  pagination,
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
  /**
   * S3 File Delete callback responce.
   *
   * @param {filename} filename aws file .
   * @param {bucket} bucket Name aws S3 bucket Distribution Id.
   * @param {accessKeyId} accessKeyId string aws accesskey.
   * @param {secretAccessKey} secretAccessKey string aws secretAccessKey.
   * @param {region} region string aws region
   * @return {callback} callback return as JSON.
   */
  S3DeleteFile: function deleteFile(
    filename,
    bucket,
    accessKeyId,
    secretAccessKey,
    region,
    callback
  ) {
    var s3 = new AWS.S3({
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      region: region,
    });
    var params = {
      Bucket: bucket,
      Key: filename,
    };
    s3.deleteObject(params, function (err, data) {
      if (data) {
        callback(data);
      } else {
        callback(err);
      }
    });
  },
  /**
   * S3 File Delete callback responce.
   *
   * @param {filename} filename aws file .
   * @param {bucket} bucket Name aws S3 bucket Distribution Id.
   * @param {accessKeyId} accessKeyId string aws accesskey.
   * @param {secretAccessKey} secretAccessKey string aws secretAccessKey.
   * @param {region} region string aws region
   * @return {callback} callback return as JSON.
   */
  S3FileUpload: function deleteFile(
    filename,
    bucket,
    accessKeyId,
    secretAccessKey,
    region,
    callback
  ) {
    var s3 = new AWS.S3({
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      region: region,
    });
    const profileImgUpload = multer({
      storage: multerS3({
        s3: s3,
        bucket: bucket,
        acl: "public-read",
        key: function (req, file, cb) {
          cb(null, path.basename(uuidv4()) + path.extname(file.originalname));
        },
      }),
      limits: { fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
      fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
      },
    }).single("photo");
    /**
     * Check File Type
     * @param file
     * @param cb
     * @return {*}
     */
    function checkFileType(file, cb) {
      // Allowed ext
      const filetypes = /jpeg|jpg|png|gif/;
      // Check ext
      const extname = filetypes.test(
        path.extname(file.originalname).toLowerCase()
      );
      // Check mime
      const mimetype = filetypes.test(file.mimetype);
      if (mimetype && extname) {
        return cb(null, true);
      } else {
        cb("Error: Images Only!");
      }
    }
  },
};

module.exports = rpsGeneral;

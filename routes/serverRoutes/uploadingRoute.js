/**
 * Created by CoderSong on 17/3/19.
 */

let pub = {},
  resUtil = require('./../../util/resReturnUtil'),
  error = require('./../../conf/basicConf').ERROR_INFO,
  uploadUtil = require('./../../util/uploadingFileUtil');

/**
 * 上传图片的处理路由
 * @param req
 * @param res
 * @param next
 */
pub.uploadingFile = (req, res, next) => {
  uploadUtil.uploadingFile(req, (path) => {
    resUtil.resSuccessHandler(res, path);
  }, (err) => {
    resUtil.resErrorHandler(res, err);
  })
};

module.exports = pub;
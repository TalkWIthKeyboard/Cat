/**
 * Created by CoderSong on 17/3/6.
 */

let pub = {},
  Download = require('./../../models/DownloadModel'),
  currencyApiUtil = require('./../../util/currencyApiUtil'),
  resSuccessHandler = require('./../../util/resReturnUtil').resSuccessHandler;

/**
 * 创建下载资源
 * @param req
 * @param res
 * @param next
 */
pub.createDownload = (req, res, next) => {
  currencyApiUtil.currencyCreateApi(req, res, Download, 'title', next);
};


/**
 * 更新下载资源
 * @param req
 * @param res
 * @param next
 */
pub.updateDownload = (req, res, next) => {
  currencyApiUtil.currencyUpdateApi(req, res, Download, next);
};


/**
 * 删除下载资源
 * @param req
 * @param res
 * @param next
 */
pub.deleteDownload = (req, res, next) => {
  currencyApiUtil.currencyDeleteApi(req, res, Download, next);
};


/**
 * 获取一条下载资源
 * @param req
 * @param res
 * @param next
 */
pub.getDownload = (req, res, next) => {
  currencyApiUtil.currencyGetApi(req, res, Download, (download) => {
    resSuccessHandler(res, {'download': download});
  }, next)
};


/**
 * 分页获取下载资源
 * @param req
 * @param res
 * @param next
 */
pub.getDownloadByPage = (req, res, next) => {
  currencyApiUtil.currencyGetApiByPage(req, res, Download, (page, downloads) => {
    resSuccessHandler(res, {
      'page': page + 1,
      'downloads': downloads
    })
  }, next)
};


module.exports = pub;
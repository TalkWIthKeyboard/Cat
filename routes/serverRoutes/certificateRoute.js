/**
 * Created by CoderSong on 17/3/5.
 */

let pub = {},
  Certificate = require('./../../models/CertificateModel'),
  currencyApiUtil = require('./../../util/currencyApiUtil'),
  resSuccessHandler = require('./../../util/resReturnUtil').resSuccessHandler;

/**
 * 创建资质证书
 * @param req
 * @param res
 * @param next
 */
pub.createCertificate = (req, res, next) => {
  currencyApiUtil.currencyCreateApi(req, res, Certificate, next);
};


/**
 * 更新资质证书
 * @param req
 * @param res
 * @param next
 */
pub.updateCertificate = (req, res, next) => {
  currencyApiUtil.currencyUpdateApi(req, res, Certificate, next);
};


/**
 * 删除资质证书
 * @param req
 * @param res
 * @param next
 */
pub.deleteCertificate = (req, res, next) => {
  currencyApiUtil.currencyDeleteApi(req, res, Certificate, next);
};


/**
 * 获取一条资质证书
 * @param req
 * @param res
 * @param next
 */
pub.getCertificate = (req, res, next) => {
  currencyApiUtil.currencyGetApi(req, res, Certificate, (certificate) => {
    resSuccessHandler(res, {'certificate': certificate});
  }, next)
};


/**
 * 分页获取资质证书
 * @param req
 * @param res
 * @param next
 */
pub.getCertificateByPage = (req, res, next) => {
  currencyApiUtil.currencyGetApiByPage(req, res, Certificate, (page, certificates) => {
    resSuccessHandler(res, {
      'page': page + 1,
      'certificates': certificates
    })
  }, next)
};


module.exports = pub;
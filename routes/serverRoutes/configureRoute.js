/**
 * Created by CoderSong on 17/3/5.
 */

let pub = {},
  Configure = require('./../../models/ConfigureModel'),
  argOps = require('./../../util/argCheckUtil'),
  currencyApiUtil = require('./../../util/currencyApiUtil'),
  errorInfo = require('./../../conf/basicConf').ERROR_INFO,
  resSuccessHandler = require('./../../util/resReturnUtil').resSuccessHandler,
  resErrorHandler = require('./../../util/resReturnUtil').resErrorHandler;

/**
 * 创建系统配置
 * @param req
 * @param res
 * @param next
 */
pub.createConfigure = (req, res, next) => {
  currencyApiUtil.currencyCreateApi(req, res, Configure, 'key', next);
};


/**
 * 更新系统配置
 * @param req
 * @param res
 * @param next
 */
pub.updateConfigure = (req, res, next) => {
  currencyApiUtil.currencyUpdateApi(req, res, Configure, next);
};


/**
 * 删除系统配置
 * @param req
 * @param res
 * @param next
 */
pub.deleteConfigure = (req, res, next) => {
  currencyApiUtil.currencyDeleteApi(req, res, Configure, next);
};


/**
 * 获取一条系统配置
 * @param req
 * @param res
 * @param next
 */
pub.getConfigure = (req, res, next) => {
  currencyApiUtil.currencyGetApi(req, res, Configure, (configure) => {
    resSuccessHandler(res, {'configure': configure});
  }, next)
};


/**
 * 分页获取系统配置
 * @param req
 * @param res
 * @param next
 */
pub.getConfigureByPage = (req, res, next) => {
  currencyApiUtil.currencyGetApiByPage(req, res, Configure, (page, configures) => {
    resSuccessHandler(res, {
      'page': page + 1,
      'configures': configures
    })
  }, next)
};


/**
 * 根据key值查询obj
 * @param req
 * @param res
 * @param next
 */
pub.getConfigureByKey = (req, res, next) => {
  let arg = {};
  arg.params = {};
  arg.params.key = req.params.key || false;

  argOps.createArgAndCheck(null, arg, null, (arg) => {
    Configure.checkIsExist(arg.params.key, (err, obj) => {
      if (err) return next(err);
      resSuccessHandler(res, {'obj': obj})
    })
  }, () => {
    resErrorHandler(res, errorInfo.REQUEST_ERR);
  })
};


module.exports = pub;
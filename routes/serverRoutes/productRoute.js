/**
 * Created by CoderSong on 17/3/2.
 */

let pub = {},
  Product = require('./../../models/ProductModel'),
  errorInfo = require('./../../conf/basicConf').ERROR_INFO,
  currencyApiUtil = require('./../../util/currencyApiUtil'),
  resSuccessHandler = require('./../../util/resReturnUtil').resSuccessHandler,
  resErrorHandler = require('./../../util/resReturnUtil').resErrorHandler;

/**
 * 创建产品
 * @param req
 * @param res
 * @param next
 */
pub.createProduct = (req, res, next) => {
  currencyApiUtil.currencyCreateApi(req, res, Product, next);
};

/**
 * 更新产品
 * @param req
 * @param res
 * @param next
 */
pub.updateProduct = (req, res, next) => {
  currencyApiUtil.currencyUpdateApi(req, res, Product, next);
};

/**
 * 删除产品
 * @param req
 * @param res
 * @param next
 */
pub.deleteProduct = (req, res, next) => {
  currencyApiUtil.currencyDeleteApi(req, res, Product, next);
};

/**
 * 获取一个产品信息
 * @param req
 * @param res
 * @param next
 */
pub.getProduct = (req, res, next) => {
  currencyApiUtil.currencyGetApi(req, res, Product, (product) => {
    resSuccessHandler(res, {'product': product})
  }, next)
};



module.exports = pub;
/**
 * Created by CoderSong on 17/3/2.
 */

let pub = {},
  Product = require('./../../models/ProductModel'),
  errorInfo = require('./../../conf/basicConf').ERROR_INFO,
  currencyApiUtil = require('./../../util/currencyApiUtil'),
  argOps = require('./../../util/argCheckUtil'),
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

/**
 * 根据产品系列来分页查找
 * 分页的时候加上了约束条件，暂时不能使用公用的API
 * @param req
 * @param res
 * @param next
 */
pub.getProductBySeriesAndPage = (req, res, next) => {
  let arg = {};
  arg.params = {};
  arg.params.page = parseInt(req.params.page) || false;
  arg.params.series = req.params.series || false;

  argOps.createArgAndCheck(null, arg, null, (arg) => {
    Product.findAllBySeriesAndPage(arg.params.page, arg.params.series, (err, products) => {
      if (err) return next(err);
      resSuccessHandler(res, {
        'products': products,
        'page': arg.params.page + 1
      })
    })
  }, () => {
    resErrorHandler(res, errorInfo.REQUEST_ERR)
  })
};


module.exports = pub;
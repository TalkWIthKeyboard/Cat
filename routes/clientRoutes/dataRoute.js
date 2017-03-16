/**
 * Created by CoderSong on 17/3/13.
 */

let pub = {},
  promiseUtil = require('./../../util/promiseUtil'),
  resSuccessHandler = require('./../../util/resReturnUtil').resSuccessHandler,
  resErrorHandler = require('./../../util/resReturnUtil').resErrorHandler,
  errorInfo = require('./../../conf/basicConf').ERROR_INFO,
  Promise = require('promise'),
  New = require('./../../models/NewModel'),
  Product = require('./../../models/ProductModel'),
  Download = require('./../../models/DownloadModel');

const frontEndConf = require('../../conf/frontEndConf')

/**
 * 按照id获取具体数据通用API
 * @param req
 * @param res
 * @param module
 * @param scb
 * @param next
 */
let getDataById = (req, res, module, scb, next) => {

  let id = req.params.id || false;

  if (id) {
    Promise.all([
      promiseUtil.getDataByIdPromise(module, id),
      promiseUtil.getContactPromise()
    ]).then((results) => {
      scb(results)
    }).catch((err) => {
      next(err);
    })
  } else {
    resErrorHandler(res, errorInfo.REQUEST_ERR)
  }
};

/**
 * 按照id获取产品信息
 * @param req
 * @param res
 * @param next
 */
pub.getProductById = (req, res, next) => {
  getDataById(req, res, Product, (results) => {
    console.log(results[0])
    res.render('detailPage', {
      layout: false,
      conf: frontEndConf.product,
      detail: results[0],
      'contact': results[1],
      title: results[0].name
    })
  }, next);
};

/**
 * 按照id获取新闻相关信息
 * @param req
 * @param res
 * @param next
 */
pub.getNewsById = (req, res, next) => {
  getDataById(req, res, New, (results) => {
    res.render('detailPage', {
      layout: false,
      conf: frontEndConf.news,
      detail: results[0],
      'contact': results[1],
      title: results[0].title
    })
  }, next)
};

/**
 * 按照id获取下载信息
 * @param req
 * @param res
 * @param next
 */
pub.getDownloadById = (req, res, next) => {
  getDataById(req, res, Download, (results) => {
    res.render('detailPage', {
      layout: false,
      conf: frontEndConf.news,
      detail: results[0],
      contact: results[1],
      title: results[0].title
    })
  }, next)
};


module.exports = pub;
/**
 * Created by CoderSong on 17/3/16.
 */

let pub = {},
  SuccessExample = require('./../../models/SuccessExampleModel'),
  Product = require('./../../models/ProductModel'),
  Download = require('./../../models/DownloadModel'),
  Configure = require('./../../models/ConfigureModel'),
  Certificate = require('./../../models/CertificateModel'),
  newType = require('./../../conf/basicConf').NEW_TYPE,
  currencyApiUtil = require('./../../util/currencyApiUtil'),
  argOps = require('./../../util/argCheckUtil'),
  promiseUtil = require('./../../util/promiseUtil'),
  Promise = require('promise'),
  resSuccessHandler = require('./../../util/resReturnUtil').resSuccessHandler,
  resErrorHandler = require('./../../util/resReturnUtil').resErrorHandler;

/**
 * 按种类分页获取
 * @param req
 * @param res
 * @param type
 * @param next
 */
let getInfoByPageAndType = (req, res, type, next) => {
  let arg = {};
  arg.params = {};
  arg.params.page = parseInt(req.params.page) || false;

  argOps.createArgAndCheck(null, arg, null, (arg) => {
    let promiseList = [
      promiseUtil.getNewsByPagePromise(type.number, arg.params.page),
      promiseUtil.getAllByTypePromise(type.number)
    ];

    Promise.all(promiseList).then((results) => {
      let jsonRes = {},
        data = results[0],
        pageCount = results[1];

      jsonRes[type.info_en] = data;
      jsonRes['page'] = arg.params.page + 1;
      jsonRes['pageCount'] = pageCount;
      resSuccessHandler(res, jsonRes)
    }).catch((err) => {
      next(err);
    });
  }, () => {
    resErrorHandler(res, errorInfo.REQUEST_ERR)
  })
};

/**
 * 管理端的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageIndexPage = (req, res, next) => {
  res.render('manage/test', {
    "layout": false
  });
};

/**
 * 联系方式的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageContactPage = (req, res, next) => {
  res.render('', {
    "layout": false
  })
};

/**
 * 成功案例的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageExamplePage = (req, res, next) => {
  currencyApiUtil.currencyGetApiByPage(req, res, SuccessExample, (page, pageCount, examples) => {
    resSuccessHandler(res, {
      'page': page + 1,
      'pageCount': pageCount,
      'examples': examples
    })
  }, next)
};

/**
 * 系统配置的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageConfigurePage = (req, res, next) => {
  currencyApiUtil.currencyGetApiByPage(req, res, Configure, (page, pageCount, configures) => {
    resSuccessHandler(res, {
      'page': page + 1,
      'pageCount': pageCount,
      'configures': configures
    })
  }, next)
};

/**
 * 资质证书的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageCertificatePage = (req, res, next) => {
  currencyApiUtil.currencyGetApiByPage(req, res, Certificate, (page, pageCount, certificates) => {
    res.render('managePage/certificate', {
      'page': page + 1,
      'pageCount': pageCount,
      'certificates': certificates,
      "layout": false
    });
  }, next)
};

/**
 * 下载文件的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageDownloadPage = (req, res, next) => {
  currencyApiUtil.currencyGetApiByPage(req, res, Download, (page, pageCount, downloads) => {
    resSuccessHandler(res, {
      'page': page + 1,
      'pageCount': pageCount,
      'downloads': downloads
    })
  }, next)
};

/**
 * 产品相关的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageProductPage = (req, res, next) => {
  currencyApiUtil.currencyGetApiByPage(req, res, Product, (page, pageCount, downloads) => {
    resSuccessHandler(res, {
      'page': page + 1,
      'pageCount': pageCount,
      'downloads': downloads
    })
  }, next)
};

/**
 * 关于我们的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageAboutMePage = (req, res, next) => {
  res.render('', {
    "layout": false
  })
};

/**
 * 新闻相关的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageNewsPage = (req, res, next) => {
  getInfoByPageAndType(req, res, newType.NEWS, next);
};

/**
 * 技术支持的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageTechnologyPage = (req, res, next) => {
  getInfoByPageAndType(req, res, newType.TECHNOLOGY, next);
};

/**
 * 行业动态的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageDynamicPage = (req, res, next) => {
  getInfoByPageAndType(req, res, newType.DYNAMIC, next);
};

/**
 * 产品新闻的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageProductNewsPage = (req, res, next) => {
  getInfoByPageAndType(req, res, newType.PRODUCT_NEW, next);
};

module.exports = pub;
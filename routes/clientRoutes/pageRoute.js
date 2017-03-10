/**
 * Created by CoderSong on 17/3/6.
 */

let pub = {},
  promiseUtil = require('./../../util/promiseUtil'),
  resSuccessHandler = require('./../../util/resReturnUtil').resSuccessHandler,
  resErrorHandler = require('./../../util/resReturnUtil').resErrorHandler,
  newType = require('./../../conf/basicConf').NEW_TYPE,
  errorInfo = require('./../../conf/basicConf').ERROR_INFO,
  argOps = require('./../../util/argCheckUtil'),
  Promise = require('promise'),
  Product = require('./../../models/ProductModel'),
  Certificate = require('./../../models/CertificateModel'),
  Download = require('./../../models/DownloadModel'),
  SuccessExample = require('./../../models/SuccessExampleModel');


/**
 * req携带page参数的路由访问模板
 * @param req
 * @param res
 * @param makeList
 * @param scb
 * @param next
 */
let getPageWithPage = (req, res, makeList, scb, next) => {

  let page = req.params.page || false;

  if (page) {
    let promiseList = makeList(page);
    Promise.all(promiseList).then((results) => {
      scb(results, page)
    }).catch((err) => {
      next(err)
    })
  } else {
    resErrorHandler(res, errorInfo.REQUEST_ERR)
  }
};

/**
 * req不携带参数的路由访问模板
 * @param req
 * @param res
 * @param promiseList
 * @param scb
 * @param next
 */
let getPageWithoutParams = (req, res, promiseList, scb, next) => {
  Promise.all(promiseList).then((results) => {
    scb(results)
  }).catch((err) => {
    next(err)
  })
};

/**
 * 主页
 * @param req
 * @param res
 * @param next
 */
pub.mainPage = (req, res, next) => {

  let promiseList = [
    promiseUtil.getNewsByPagePromise(newType.NEWS.number, 1),
    promiseUtil.getNewsByPagePromise(newType.TECHNOLOGY.number, 1),
    promiseUtil.getConfigurePromise('aboutMe'),
    promiseUtil.getAllByPagePromise(Product, 1),
    promiseUtil.getContactPromise()
  ];

  getPageWithoutParams(req, res, promiseList, (results) => {
    resSuccessHandler(res, {
      'news': results[0],
      'technology': results[1],
      'about': results[2],
      'product': results[3],
      'contact': results[4]
    })
  }, next);
};

/**
 * 关于我们页面
 * @param req
 * @param res
 * @param next
 */
pub.aboutMePage = (req, res, next) => {

  let promiseList = [
    promiseUtil.getConfigurePromise('aboutMe'),
    promiseUtil.getContactPromise()
  ];

  getPageWithoutParams(req, res, promiseList, (results) => {
    resSuccessHandler(res, {
      'about': results[0],
      'contact': results[1]
    })
  }, next);
};

/**
 * 企业文化页面
 * @param req
 * @param res
 * @param next
 */
pub.businessCulturePage = (req, res, next) => {

  let promiseList = [
    promiseUtil.getConfigurePromise('businessCulture'),
    promiseUtil.getContactPromise()
  ];

  getPageWithoutParams(req, res, promiseList, (results) => {
    resSuccessHandler(res, {
      'businessCulture': results[0],
      'contact': results[1]
    })
  }, next);
};

/**
 * 企业加盟页面
 * @param req
 * @param res
 * @param next
 */
pub.businessJoinPage = (req, res, next) => {

  let promiseList = [
    promiseUtil.getConfigurePromise('businessJoin'),
    promiseUtil.getContactPromise()
  ];

  getPageWithoutParams(req, res, promiseList, (results) => {
    resSuccessHandler(res, {
      'businessJoin': results[0],
      'contact': results[1]
    })
  }, next);
};

/**
 * 产品展示页面
 * @param req
 * @param res
 * @param next
 */
pub.productShowPage = (req, res, next) => {

  getPageWithPage(req, res, (page) => {
    return [
      promiseUtil.getAllByPagePromise(Product, page),
      promiseUtil.getAllCountPromise(Product),
      promiseUtil.getContactPromise()
    ]
  }, (results, page) => {
    resSuccessHandler(res, {
      'products': results[0],
      'count': results[1],
      'contact': results[2],
      'page': page + 1
    })
  }, next);
};

/**
 * 企业新闻页面
 * @param req
 * @param res
 * @param next
 */
pub.companyNewPage = (req, res, next) => {

  getPageWithPage(req, res, (page) => {
    return [
      promiseUtil.getNewsByPagePromise(newType.NEWS.number, page),
      promiseUtil.getAllByTypePromise(newType.NEWS.number),
      promiseUtil.getContactPromise()
    ]
  }, (results, page) => {
    resSuccessHandler(res, {
      'companyNews': results[0],
      'count': results[1],
      'contact': results[2],
      'page': page + 1
    })
  }, next);
};

/**
 * 行业动态页面
 * @param req
 * @param res
 * @param next
 */
pub.dynamicPage = (req, res, next) => {

  getPageWithPage(req, res, (page) => {
    return [
      promiseUtil.getNewsByPagePromise(newType.DYNAMIC.number, page),
      promiseUtil.getAllByTypePromise(newType.DYNAMIC.number),
      promiseUtil.getContactPromise()
    ]
  }, (results, page) => {
    resSuccessHandler(res, {
      'dynamics': results[0],
      'count': results[1],
      'contact': results[2],
      'page': page + 1
    })
  }, next);
};

/**
 * 产品新闻页面
 * @param req
 * @param res
 * @param next
 */
pub.productNewsPage = (req, res, next) => {

  getPageWithPage(req, res, (page) => {
    return [
      promiseUtil.getNewsByPagePromise(newType.PRODUCT_NEW.number, page),
      promiseUtil.getAllByTypePromise(newType.PRODUCT_NEW.number),
      promiseUtil.getContactPromise()
    ]
  }, (results, page) => {
    resSuccessHandler(res, {
      'productNews': results[0],
      'count': results[1],
      'contact': results[2],
      'page': page + 1
    })
  }, next);
};

/**
 * 技术支持页面
 * @param req
 * @param res
 * @param next
 */
pub.technologyPage = (req, res, next) => {

  getPageWithPage(req, res, (page) => {
    return [
      promiseUtil.getNewsByPagePromise(newType.TECHNOLOGY.number, page),
      promiseUtil.getAllByTypePromise(newType.TECHNOLOGY.number),
      promiseUtil.getContactPromise()
    ]
  }, (results, page) => {
    resSuccessHandler(res, {
      'technology': results[0],
      'count': results[1],
      'contact': results[2],
      'page': page + 1
    })
  }, next);
};

/**
 * 下载中心页面
 * @param req
 * @param res
 * @param next
 */
pub.downloadPage = (req, res, next) => {

  getPageWithPage(req, res, (page) => {
    return [
      promiseUtil.getAllByPagePromise(Download, page),
      promiseUtil.getAllCountPromise(Download),
      promiseUtil.getContactPromise()
    ]
  }, (results, page) => {
    resSuccessHandler(res, {
      'download': results[0],
      'count': results[1],
      'contact': results[2],
      'page': page + 1
    })
  }, next);
};

/**
 * 成功案例页面
 * @param req
 * @param res
 * @param next
 */
pub.successExamplePage = (req, res, next) => {

  getPageWithPage(req, res, (page) => {
    return [
      promiseUtil.getAllByPagePromise(SuccessExample, page),
      promiseUtil.getAllCountPromise(SuccessExample),
      promiseUtil.getContactPromise()
    ]
  }, (results, page) => {
    resSuccessHandler(res, {
      'successExample': results[0],
      'count': results[1],
      'contact': results[2],
      'page': page + 1
    })
  }, next);
};

/**
 * 资质证书页面
 * @param req
 * @param res
 * @param next
 */
pub.certificatePage = (req, res, next) => {

  getPageWithPage(req, res, (page) => {
    return [
      promiseUtil.getAllByPagePromise(Certificate, page),
      promiseUtil.getAllCountPromise(Certificate),
      promiseUtil.getContactPromise()
    ]
  }, (results, page) => {
    resSuccessHandler(res, {
      'certificate': results[0],
      'count': results[1],
      'contact': results[2],
      'page': page + 1
    })
  }, next);
};

/**
 * 联系我们页面
 * @param req
 * @param res
 * @param next
 */
pub.contactPage = (req, res, next) => {

  let promiseList = [
    promiseUtil.getContactPromise()
  ];

  getPageWithoutParams(req, res, promiseList, (results) => {
    resSuccessHandler(res, {
      'contact': results[0],
    })
  }, next);
};

/**
 * 分类型分页获取产品
 * @param req
 * @param res
 * @param next
 */
pub.productBySeriesPage = (req, res, next) => {

  let arg = {};
  arg.params = {};
  arg.params.page = req.params.page || false;
  arg.params.series = req.params.series || false;

  argOps.createArgAndCheck(null, arg, null, (arg) => {
    let promiseList = [
      promiseUtil.getProductBySeriesByPagePromise(arg.params.series, arg.params.page),
      promiseUtil.getAllBySeriesCountPromise(arg.params.series),
      promiseUtil.getContactPromise()
    ];

    Promise.all(promiseList).then((results) => {
      resSuccessHandler(res, {
        'products': results[0],
        'count': results[1],
        'contact': results[2],
        'page': arg.params.page + 1
      })
    }).catch((err) => {
      next(err)
    })
  }, () => {
    resErrorHandler(res, errorInfo.REQUEST_ERR)
  });
};

module.exports = pub;
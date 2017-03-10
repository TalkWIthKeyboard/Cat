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
  Promise = require('promise');

const frontEndConf = require('../../conf/frontEndConf')


/**
 * req携带page参数的路由访问模板
 * @param req
 * @param res
 * @param makeList
 * @param scb
 * @param next
 */
let getPageWithPage = (req, res, makeList, scb, next) => {

  // let page = req.params.page || false;
  let page = req.params.page || 1

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
    promiseUtil.getNewsPromise(newType.NEWS.number, 1),
    promiseUtil.getNewsPromise(newType.TECHNOLOGY.number, 1),
    promiseUtil.getConfigurePromise('aboutMe'),
    promiseUtil.getProductPromise(1),
    promiseUtil.getContactPromise()
  ];

  getPageWithoutParams(req, res, promiseList, (results) => {
    res.render('index', {
      layout: false,
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
    res.render('aboutMe', {
      layout: false,
      conf: frontEndConf.aboutMe,
      aboutSection: '企业简介',
      'aboutInfo': results[0],
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
    res.render('aboutMe', {
      layout: false,
      conf: frontEndConf.aboutMe,
      aboutSection: '企业文化',
      'aboutInfo': results[0],
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
    res.render('aboutMe', {
      layout: false,
      conf: frontEndConf.aboutMe,
      aboutSection: '招商加盟',
      'aboutInfo': results[0],
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
      promiseUtil.getProductPromise(page),
      promiseUtil.getContactPromise()
    ]
  }, (results, page) => {
    res.render('productsPage', {
      layout: false,
      conf: frontEndConf.aboutMe,
      products: results[0],
      contact: results[1],
      page: page + 1
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
      promiseUtil.getNewsPromise(newType.NEWS.number, page),
      promiseUtil.getContactPromise()
    ]
  }, (results, page) => {
    resSuccessHandler(res, {
      'companyNews': results[0],
      'contact': results[1],
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
      promiseUtil.getNewsPromise(newType.DYNAMIC.number, page),
      promiseUtil.getContactPromise()
    ]
  }, (results, page) => {
    resSuccessHandler(res, {
      'dynamics': results[0],
      'contact': results[1],
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
      promiseUtil.getNewsPromise(newType.PRODUCT_NEW.number, page),
      promiseUtil.getContactPromise()
    ]
  }, (results, page) => {
    resSuccessHandler(res, {
      'productNews': results[0],
      'contact': results[1],
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
      promiseUtil.getNewsPromise(newType.TECHNOLOGY.number, page),
      promiseUtil.getContactPromise()
    ]
  }, (results, page) => {
    resSuccessHandler(res, {
      'technology': results[0],
      'contact': results[1],
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
      promiseUtil.getDownloadPromise(page),
      promiseUtil.getContactPromise()
    ]
  }, (results, page) => {
    resSuccessHandler(res, {
      'download': results[0],
      'contact': results[1],
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
      promiseUtil.getDownloadPromise(page),
      promiseUtil.getContactPromise()
    ]
  }, (results, page) => {
    resSuccessHandler(res, {
      'download': results[0],
      'contact': results[1],
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
      promiseUtil.getSuccessExamplePromise(page),
      promiseUtil.getContactPromise()
    ]
  }, (results, page) => {
    resSuccessHandler(res, {
      'successExample': results[0],
      'contact': results[1],
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
      promiseUtil.getCertificatePromise(page),
      promiseUtil.getContactPromise()
    ]
  }, (results, page) => {
    resSuccessHandler(res, {
      'certificate': results[0],
      'contact': results[1],
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
    res.render('contact', {
      layout: false,
      conf: frontEndConf.contact,
      'contact': results[0]
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
      promiseUtil.getProductBySeriesPromise(arg.params.series, arg.params.page),
      promiseUtil.getContactPromise()
    ];

    Promise.all(promiseList).then((results) => {
      resSuccessHandler(res, {
        'products': results[0],
        'contact': results[1],
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
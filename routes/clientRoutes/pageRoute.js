/**
 * Created by CoderSong on 17/3/6.
 */

let pub = {},
  promiseUtil = require('./../../util/promiseUtil'),
  resSuccessHandler = require('./../../util/resReturnUtil').resSuccessHandler,
  resErrorHandler = require('./../../util/resReturnUtil').resErrorHandler,
  newType = require('./../../conf/basicConf').NEW_TYPE,
  errorInfo = require('./../../conf/basicConf').ERROR_INFO,
  Promise = require('promise');


/**
 * req携带page参数的路由访问模板
 * @param req
 * @param res
 * @param makeList
 * @param scb
 */
let getPageWithPage = (req, res, makeList, scb) => {

  let page = req.params.page || false;

  if (page) {
    let promiseList = makeList(page);
    Promise.all(promiseList).then((results) => {
      scb(results, page)
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
 */
let getPageWithoutParams = (req, res, promiseList, scb) => {
  Promise.all(promiseList).then((results) => {
    scb(results)
  })
};

/**
 * 主页
 * @param req
 * @param res
 */
pub.mainPage = (req, res) => {

  let promiseList = [
    promiseUtil.getNewsPromise(newType.NEWS, 1),
    promiseUtil.getNewsPromise(newType.TECHNOLOGY, 1),
    promiseUtil.getConfigurePromise('aboutMe'),
    promiseUtil.getProductPromise(1),
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
  });
};

/**
 * 关于我们页面
 * @param req
 * @param res
 */
pub.aboutMePage = (req, res) => {

  let promiseList = [
    promiseUtil.getConfigurePromise('aboutMe'),
    promiseUtil.getContactPromise()
  ];

  getPageWithoutParams(req, res, promiseList, (results) => {
    resSuccessHandler(res, {
      'about': results[0],
      'contact': results[1]
    })
  });
};

/**
 * 企业文化页面
 * @param req
 * @param res
 */
pub.businessCulturePage = (req, res) => {

  let promiseList = [
    promiseUtil.getConfigurePromise('businessCulture'),
    promiseUtil.getContactPromise()
  ];

  getPageWithoutParams(req, res, promiseList, (results) => {
    resSuccessHandler(res, {
      'businessCulture': results[0],
      'contact': results[1]
    })
  });
};

/**
 * 企业加盟页面
 * @param req
 * @param res
 */
pub.businessJoinPage = (req, res) => {

  let promiseList = [
    promiseUtil.getConfigurePromise('businessJoin'),
    promiseUtil.getContactPromise()
  ];

  getPageWithoutParams(req, res, promiseList, (results) => {
    resSuccessHandler(res, {
      'businessJoin': results[0],
      'contact': results[1]
    })
  });
};

/**
 * 产品展示页面
 * @param req
 * @param res
 */
pub.productShowPage = (req, res) => {

  getPageWithPage(req, res, (page) => {
    return [
      promiseUtil.getProductPromise(page),
      promiseUtil.getContactPromise()
    ]
  }, (results, page) => {
    resSuccessHandler(res, {
      'products': results[0],
      'contact': results[1],
      'page': page + 1
    })
  });
};

/**
 * 企业新闻页面
 * @param req
 * @param res
 */
pub.companyNewPage = (req, res) => {

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
  });
};

/**
 * 行业动态页面
 * @param req
 * @param res
 */
pub.dynamicPage = (req, res) => {

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
  });
};

/**
 * 产品新闻页面
 * @param req
 * @param res
 */
pub.productNewsPage = (req, res) => {

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
  });
};

/**
 * 技术支持页面
 * @param req
 * @param res
 */
pub.technologyPage = (req, res) => {

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
  });
};

/**
 * 下载中心页面
 * @param req
 * @param res
 */
pub.downloadPage = (req, res) => {

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
  });
};

/**
 * 下载中心页面
 * @param req
 * @param res
 */
pub.downloadPage = (req, res) => {

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
  });
};

/**
 * 成功案例页面
 * @param req
 * @param res
 */
pub.successExamplePage = (req, res) => {

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
  });
};

/**
 * 资质证书页面
 * @param req
 * @param res
 */
pub.certificatePage = (req, res) => {

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
  });
};

/**
 * 联系我们页面
 * @param req
 * @param res
 */
pub.contactPage = (req, res) => {

  let promiseList = [
    promiseUtil.getContactPromise()
  ];

  getPageWithoutParams(req, res, promiseList, (results) => {
    resSuccessHandler(res, {
      'contact': results[0],
    })
  });
};

module.exports = pub;
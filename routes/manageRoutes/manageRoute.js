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
  basicConf = require('./../../conf/basicConf'),
  Promise = require('promise'),
  autConf = require('./../../conf/authenticationConf'),
  autUtil = require('./../../util/authenticationUtil'),
  resSuccessHandler = require('./../../util/resReturnUtil').resSuccessHandler,
  resErrorHandler = require('./../../util/resReturnUtil').resErrorHandler;

/**
 * 按种类分页获取
 * @param req
 * @param res
 * @param type
 * @param admin
 * @param next
 */
let getInfoByPageAndType = (req, res, type, admin, next) => {
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
      jsonRes['admin'] = admin.username;
      jsonRes['page'] = arg.params.page + 1;
      jsonRes['pageCount'] = Math.ceil(pageCount / basicConf.pageSize);
      jsonRes['baseUrl'] = type['base_url'];
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
  autUtil.identityCheck(req, res, autConf.OPERATION_TYPE.USE_WEB, (admin) => {
    res.render('managePage/test', {
      admin: admin.username,
      layout: false
    });
  });
};

/**
 * 联系方式的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageContactPage = (req, res, next) => {
  autUtil.identityCheck(req, res, autConf.OPERATION_TYPE.USE_WEB, (admin) => {
    res.render('', {
      "layout": false
    })
  });
};

/**
 * 成功案例的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageExamplePage = (req, res, next) => {
  autUtil.identityCheck(req, res, autConf.OPERATION_TYPE.USE_WEB, (admin) => {
    currencyApiUtil.currencyGetApiByPage(req, res, SuccessExample, (page, pageCount, examples) => {
      res.render('managePage/example', {
        layout: false,
        baseUrl: '/manage/example/page/',
        admin: admin.username,
        page: page + 1,
        pageCount: Math.floor(pageCount / basicConf.pageSize),
        examples: examples,
        title: '成功案例'
      })
    }, next)
  });
};

/**
 * 系统配置的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageConfigurePage = (req, res, next) => {
  autUtil.identityCheck(req, res, autConf.OPERATION_TYPE.USE_WEB, (admin) => {
    currencyApiUtil.currencyGetApiByPage(req, res, Configure, (page, pageCount, configures) => {
      resSuccessHandler(res, {
        'page': page + 1,
        'pageCount': Math.floor(pageCount / basicConf.pageSize),
        'configures': configures
      })
    }, next)
  });
};

/**
 * 资质证书的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageCertificatePage = (req, res, next) => {
  autUtil.identityCheck(req, res, autConf.OPERATION_TYPE.USE_WEB, (admin) => {
    currencyApiUtil.currencyGetApiByPage(req, res, Certificate, (page, pageCount, certificates) => {
      res.render('managePage/certificate', {
        admin: admin.username,
        baseUrl: '/manage/certificate/page/',
        page: page + 1,
        pageCount: Math.ceil(pageCount / basicConf.pageSize),
        certificates: certificates,
        layout: false
      });
    }, next)
  });
};

/**
 * 下载文件的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageDownloadPage = (req, res, next) => {
  autUtil.identityCheck(req, res, autConf.OPERATION_TYPE.USE_WEB, (admin) => {
    currencyApiUtil.currencyGetApiByPage(req, res, Download, (page, pageCount, downloads) => {
      res.render('managePage/download', {
        admin: admin.username,
        baseUrl: '/manage/download/page/',
        page: page + 1,
        pageCount: Math.ceil(pageCount / basicConf.pageSize),
        downloads: downloads,
        layout: false
      });
    }, next)
  });
};

/**
 * 产品相关的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageProductPage = (req, res, next) => {
  autUtil.identityCheck(req, res, autConf.OPERATION_TYPE.USE_WEB, (admin) => {
    currencyApiUtil.currencyGetApiByPage(req, res, Product, (page, pageCount, products) => {
      res.render('managePage/product', {
        layout: false,
        baseUrl: '/manage/product/page/',
        admin: admin.username,
        page: page + 1,
        pageCount: Math.ceil(pageCount / basicConf.pageSize),
        products: products
      })

    }, next)
  });
};

/**
 * 关于我们的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageAboutMePage = (req, res, next) => {
  autUtil.identityCheck(req, res, autConf.OPERATION_TYPE.USE_WEB, (admin) => {
    res.render('', {
      "layout": false
    })
  });
};

/**
 * 新闻相关的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageNewsPage = (req, res, next) => {
  autUtil.identityCheck(req, res, autConf.OPERATION_TYPE.USE_WEB, (admin) => {
    getInfoByPageAndType(req, res, newType.NEWS, admin, next);
  });
};

/**
 * 技术支持的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageTechnologyPage = (req, res, next) => {
  autUtil.identityCheck(req, res, autConf.OPERATION_TYPE.USE_WEB, (admin) => {
    getInfoByPageAndType(req, res, newType.TECHNOLOGY, admin, next);
  });
};

/**
 * 行业动态的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageDynamicPage = (req, res, next) => {
  autUtil.identityCheck(req, res, autConf.OPERATION_TYPE.USE_WEB, (admin) => {
    getInfoByPageAndType(req, res, newType.DYNAMIC, admin, next);
  });
};

/**
 * 产品新闻的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageProductNewsPage = (req, res, next) => {
  autUtil.identityCheck(req, res, autConf.OPERATION_TYPE.USE_WEB, (admin) => {
    getInfoByPageAndType(req, res, newType.PRODUCT_NEW, admin, next);
  });
};

/**
 * 管理员登录页面
 * @param req
 * @param res
 * @param next
 */
pub.adminLoginPage = (req, res, next) => {
  res.render('managePage/login', {
    layout: false
  });
};

module.exports = pub;
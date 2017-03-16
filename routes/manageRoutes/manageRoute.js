/**
 * Created by CoderSong on 17/3/16.
 */

let pub = {};

/**
 * 管理端的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageIndexPage = (req, res, next) => {
  res.render('serverPage/test', {
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
 * 新闻相关的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageNewPage = (req, res, next) => {
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
  res.render('', {
    "layout": false
  })
};

/**
 * 系统配置的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageConfigurePage = (req, res, next) => {
  res.render('', {
    "layout": false
  })
};

/**
 * 资质证书的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageCertificatePage = (req, res, next) => {
  res.render('', {
    "layout": false
  })
};

/**
 * 下载文件的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageDownloadPage = (req, res, next) => {
  res.render('', {
    "layout": false
  })
};

/**
 * 产品相关的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageProductPage = (req, res, next) => {
  res.render('', {
    "layout": false
  })
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
 * 技术支持的页面
 * @param req
 * @param res
 * @param next
 */
pub.manageTechnologyPage = (req, res, next) => {
  res.render('', {
    "layout": false
  })
};

module.exports = pub;
/**
 * Created by CoderSong on 17/3/6.
 */

let pub = {},
  Promise = require('promise'),
  New = require('./../models/NewModel'),
  Product = require('./../models/ProductModel'),
  Certificate = require('./../models/CertificateModel'),
  Download = require('./../models/DownloadModel'),
  Configure = require('./../models/ConfigureModel'),
  ContactInformation = require('./../models/ContactInformationModel'),
  SuccessExample = require('./../models/SuccessExampleModel'),
  newType = require('./../conf/basicConf').NEW_TYPE;

/**
 * 获取某种新闻的第几页
 * @param type
 * @param page
 */
pub.getNewsPromise = (type, page) => {
  return new Promise((resolve) => {
    New.findAllByPageAndType(type, page, (err, news) => {
      if (err) return next(err);
      resolve(news);
    })
  });
};

/**
 * 获取关于我们
 * @returns {Promise}
 */
pub.getConfigurePromise = (key) => {
  return new Promise((resolve) => {
    Configure.checkIsExist(key, (err, obj) => {
      if (err) return next(err);
      resolve(obj);
    })
  });
};

/**
 * 获取产品的第几页
 * @param page
 * @returns {Promise}
 */
pub.getProductPromise = (page) => {
  return new Promise((resolve) => {
    Product.findAllByPage(page, (err, product) => {
      if (err) return next(err);
      resolve(product);
    })
  })
};

/**
 * 获取联系方式
 * @returns {Promise}
 */
pub.getContactPromise = () => {
  return new Promise((resolve) => {
    ContactInformation.findFirst((err, contact) => {
      if (err) return next(err);
      resolve(contact);
    })
  })
};

/**
 * 获取下载文件的第几页
 */
pub.getDownloadPromise = (page) => {
  return new Promise((resolve) => {
    Download.findAllByPage(page, (err, download) => {
      if (err) return next(err);
      resolve(download);
    })
  })
};

/**
 * 获取成功案例的第几页
 * @param page
 */
pub.getSuccessExamplePromise = (page) => {
  return new Promise((resolve) => {
    SuccessExample.findAllByPage(page, (err, se) => {
      if (err) return next(err);
      resolve(se);
    })
  })
};

/**
 * 获取资质证书的第几页
 * @param page
 */
pub.getCertificatePromise = (page) => {
  return new Promise((resolve) => {
    Certificate.findAllByPage(page, (err, certificate) => {
      if (err) return next(err);
      resolve(certificate);
    })
  })
};

module.exports = pub;
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
  SuccessExample = require('./../models/SuccessExampleModel');

/**
 * 获取某种新闻的第几页
 * @param type
 * @param page
 */
pub.getNewsPromise = (type, page) => {
  return new Promise((resolve, reject) => {
    New.findAllByPageAndType(type, page, (err, news) => {
      err ? reject(err) : resolve(news);
    })
  });
};

/**
 * 获取关于我们
 * @returns {Promise}
 */
pub.getConfigurePromise = (key) => {
  return new Promise((resolve, reject) => {
    Configure.checkIsExist(key, (err, obj) => {
      err ? reject(err) : resolve(obj);
    })
  });
};

/**
 * 获取产品的第几页
 * @param page
 * @returns {Promise}
 */
pub.getProductPromise = (page) => {
  return new Promise((resolve, reject) => {
    Product.findAllByPage(page, (err, product) => {
      err ? reject(err) : resolve(product);
    })
  })
};

/**
 * 获取联系方式
 * @returns {Promise}
 */
pub.getContactPromise = () => {
  return new Promise((resolve, reject) => {
    ContactInformation.findFirst((err, contact) => {
      err ? reject(err) : resolve(contact);
    })
  })
};

/**
 * 获取下载文件的第几页
 */
pub.getDownloadPromise = (page) => {
  return new Promise((resolve, reject) => {
    Download.findAllByPage(page, (err, download) => {
      err ? reject(err) : resolve(download);
    })
  })
};

/**
 * 获取成功案例的第几页
 * @param page
 */
pub.getSuccessExamplePromise = (page) => {
  return new Promise((resolve, reject) => {
    SuccessExample.findAllByPage(page, (err, se) => {
      err ? reject(err) : resolve(se);
    })
  })
};

/**
 * 获取资质证书的第几页
 * @param page
 */
pub.getCertificatePromise = (page) => {
  return new Promise((resolve, reject) => {
    Certificate.findAllByPage(page, (err, certificate) => {
      err ? reject(err) : resolve(certificate);
    })
  })
};


/**
 * 分种类获取产品的第几页
 * @param series
 * @param page
 */
pub.getProductBySeriesPromise = (series, page) => {
  return new Promise((resolve, reject) => {
    Product.findAllBySeriesAndPage(page, series, (err, products) => {
      err ? reject(err) : resolve(products)
    })
  })
};

module.exports = pub;
/**
 * Created by CoderSong on 17/3/6.
 */

let pub = {},
  Promise = require('promise'),
  New = require('./../models/NewModel'),
  Product = require('./../models/ProductModel'),
  Certificate = require('./../models/CertificateModel'),
  Configure = require('./../models/ConfigureModel'),
  ContactInformation = require('./../models/ContactInformationModel'),
  SuccessExample = require('./../models/SuccessExampleModel'),
  newType = require('./../conf/basicConf').NEW_TYPE;

/**
 * 获取新闻的第几页
 * @param page
 * @returns {Promise}
 */
pub.getNewsPromise = (page) => {
  return new Promise((resolve) => {
    New.findAllByPageAndType(newType.NEWS.number, page, (err, news) => {
      if (err) return next(err);
      resolve(news);
    })
  });
};

/**
 * 获取技术支持的第几页
 * @param page
 * @returns {Promise}
 */
pub.getTechnologyPromise = (page) => {
  return new Promise((resolve) => {
    New.findAllByPageAndType(newType.TECHNOLOGY.number, page, (err, technology) => {
      if (err) return next(err);
      resolve(technology);
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

module.exports = pub;
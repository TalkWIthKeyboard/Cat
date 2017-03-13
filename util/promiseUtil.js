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



/*分页查找*/

/**
 * 通用的分页查找
 * @param module
 * @param page
 */
pub.getAllByPagePromise = (module, page) => {
  return new Promise((resolve, reject) => {
    module.findAllByPage(page, (err, data) => {
      err ? reject(err) : resolve(data)
    })
  })
};

/**
 * 分种类获取产品的第几页
 * @param series
 * @param page
 */
pub.getProductBySeriesByPagePromise = (series, page) => {
  return new Promise((resolve, reject) => {
    Product.findAllBySeriesAndPage(page, series, (err, products) => {
      err ? reject(err) : resolve(products)
    })
  })
};

/**
 * 获取某种新闻的第几页
 * @param type
 * @param page
 */
pub.getNewsByPagePromise = (type, page) => {
  return new Promise((resolve, reject) => {
    New.findAllByPageAndType(type, page, (err, news) => {
      err ? reject(err) : resolve(news);
    })
  });
};



/*查找数据总数*/

/**
 * 通用的查找数据总数
 * @param module
 */
pub.getAllCountPromise = (module) => {
  return new Promise((resolve, reject) => {
    module.findAllCount((err, count) => {
      err ? reject(err) : resolve(count)
    })
  })
};

/**
 * 分类型查找产品数据总数
 * @param series
 */
pub.getAllBySeriesCountPromise = (series) => {
  return new Promise((resolve, reject) => {
    Product.findAllBySeriesCount(series, (err, count) => {
      err ? reject(err) : resolve(count)
    })
  })
};

/**
 * 分类型查找新闻数据总数
 * @param type
 */
pub.getAllByTypePromise = (type) => {
  return new Promise((resolve, reject) => {
    New.findAllCount(type, (err, count) => {
      err ? reject(err) : resolve(count)
    })
  })
};

/*按照ID查找*/
pub.getDataByIdPromise = (module, id) => {
  return new Promise((resolve, reject) => {
    module.findById(id, (err, data) => {
      err ? reject(err) : resolve(data)
    })
  })
};
module.exports = pub;
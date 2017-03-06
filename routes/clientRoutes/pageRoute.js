/**
 * Created by CoderSong on 17/3/6.
 */

let pub = {},
  promiseUtil = require('./../../util/promiseUtil'),
  resSuccessHandler = require('./../../util/resReturnUtil').resSuccessHandler,
  Promise = require('promise');

/**
 * 主页
 * @param req
 * @param res
 */
pub.mainPage = (req, res) => {

  let promiseList = [
    promiseUtil.getNewsPromise(1),
    promiseUtil.getTechnologyPromise(1),
    promiseUtil.getConfigurePromise('aboutMe'),
    promiseUtil.getProductPromise(1),
    promiseUtil.getContactPromise()
  ];

  Promise.all(promiseList).then((results) => {
    resSuccessHandler(res, {
      'news': results[0],
      'technology': results[1],
      'about': results[2],
      'product': results[3],
      'contact': results[4]
    })
  })
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

  Promise.all(promiseList).then((results) => {
    resSuccessHandler(res, {
      'about': results[0],
      'contact': results[1]
    })
  })
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

  Promise.all(promiseList).then((results) => {
    resSuccessHandler(res, {
      'businessCulture': results[0],
      'contact': results[1]
    })
  })
};

/**
 * 企业加盟页面
 * @param req
 * @param res
 */
pub.businessJoin = (req, res) => {

  let promiseList = [
    promiseUtil.getConfigurePromise('businessJoin'),
    promiseUtil.getContactPromise()
  ];

  Promise.all(promiseList).then((results) => {
    resSuccessHandler(res, {
      'businessJoin': results[0],
      'contact': results[1]
    })
  })
};

/**
 * 产品展示页面
 * @param req
 * @param res
 */
pub.productShow = (req, res) => {

  let promiseList = [
    promiseUtil.getProductPromise(1),
    promiseUtil.getContactPromise()
  ];

  Promise.all(promiseList).then((results) => {
    resSuccessHandler(res, {
      'products': results[0],
      'contact': results[1]
    })
  })
};

module.exports = pub;
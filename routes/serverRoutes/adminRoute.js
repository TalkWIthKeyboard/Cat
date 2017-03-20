/**
 * Created by CoderSong on 17/3/19.
 */

let pub = {},
  Admin = require('./../../models/AdminModel'),
  error = require('./../../conf/basicConf').ERROR_INFO,
  resUtil = require('./../../util/resReturnUtil'),
  Promise = require('promise'),
  stringUtil = require('./../../util/stringUtile'),
  currencyApiUtil = require('./../../util/currencyApiUtil');

/**
 * sha1加密promise封装
 * @param string
 */
let toSha1Promise = (string) => {
  return Promise.resolve(
    stringUtil.toSha1(string)
  )
};

/**
 * 创建管理员
 * @param req
 * @param res
 * @param next
 */
pub.createAdmin = (req, res, next) => {
  if (req.body.password) {
    toSha1Promise(req.body.password).then((result) => {
      req.body.password = result.toString();
      currencyApiUtil.currencyCreateApi(req, res, Admin, 'username', next);
    })
  } else {
    resUtil.resErrorHandler(res, error.REQUEST_ERR);
  }
};

/**
 * 更新管理员（这边限制一下只更新密码）
 * @param req
 * @param res
 * @param next
 */
pub.updateAdmin = (req, res, next) => {
  currencyApiUtil.currencyUpdateApi(req, res, Admin, next);
};

/**
 * 删除管理员
 * @param req
 * @param res
 * @param next
 */
pub.deleteAdmin = (req, res, next) => {
  currencyApiUtil.currencyDeleteApi(req, res, Admin, next);
};

/**
 * 检查登录
 * @param req
 * @param res
 * @param next
 */
pub.checkAdmin = (req, res, next) => {
  let arg = {};
  arg.body = {};
  arg.body.username = req.body.username || false;
  arg.body.password = req.body.password || false;

  if (arg.body.username && arg.body.password) {
    let checkIsExistPromise = new Promise((resolve, reject) => {
      Admin.checkIsExist(arg.body.username, (err, admin) => {
        err ? reject(err) : resolve(admin)
      })
    });

    let promiseList = [checkIsExistPromise, toSha1Promise(arg.body.password)];
    Promise.all(promiseList).then((results) => {
      let admin = results[0],
        pwd = results[1].toString();
      if (admin && pwd === admin.password) {
        req.session.admin = admin;
        resUtil.resSuccessHandler(res)
      } else {
        resUtil.resErrorHandler(res, error.ADMIN_ERR)
      }
    }).catch((err) => {
      next(err)
    })
  }
};

module.exports = pub;
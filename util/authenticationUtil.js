/**
 * Created by CoderSong on 17/3/20.
 */

let pub = {},
  _ = require('underscore'),
  resUtil = require('./../util/resReturnUtil'),
  error = require('./../conf/basicConf').ERROR_INFO,
  autConf = require('./../conf/authenticationConf');

/**
 * 检查是否登录
 * @param req
 * @param res
 * @param op
 * @param scb
 */
pub.identityCheck = (req, res, op, scb) => {
  let admin = req.session.admin || false;
  // 是否登录
  if (admin) {
    // 检查登录用户的权限
    console.log(autConf.AUTH_ROLE[admin.type].permission);
    console.log(op);
    if (_.indexOf(autConf.AUTH_ROLE[admin.type].permission, op.key) == -1) {
      return resUtil.resErrorHandler(res, error.IDENTIFY_ERR);
    } else {
      scb(admin)
    }
  } else {
    return res.redirect('/manage/admin');
  }
};

module.exports = pub;
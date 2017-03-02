/**
 * Created by CoderSong on 17/3/1.
 */

let pub = {},
  ERROR_INFO = require('./../../conf/basicConf').ERROR_INFO,
  resErrorHandler = require('./../../util/resReturnUtil').resErrorHandler;

/**
 * 数据库错误处理中间件
 * @returns {function(*=, *, *=, *)}
 */
pub.databaseErrorMiddleWare = () => {
  return (err, req, res, next) => {
    resErrorHandler(res, ERROR_INFO.DATABASE_ERR, err);
    next();
  }
};

module.exports = pub;
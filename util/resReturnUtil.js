/**
 * Created by CoderSong on 17/2/28.
 */
let pub = {},
  ERROR_INFO = require('./../conf/basicConf').ERROR_INFO;

pub.resSuccessHandler = (res, data) => {
  return data
    ? res.json({"code": ERROR_INFO.SUCCESS, "data": data})
    : res.json({"code": ERROR_INFO.SUCCESS});
};

pub.resErrorHandler = (res, code, err) => {
  return err
    ? res.json({"code": code, "err": err})
    : res.json({"code": code});
};

module.exports = pub;
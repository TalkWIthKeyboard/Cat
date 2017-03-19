/**
 * Created by CoderSong on 17/3/19.
 */

let pub = {},
  Promise = require('promise'),
  crypto = require('crypto');

/**
 * 把字符串sha1加密
 * @param string
 * @param cb
 */
pub.toSha1 = (string, cb) => {
  let shasum = crypto.createHash('sha1');
  shasum.update('password');
  let d = shasum.digest(string);
  return d;
};

module.exports = pub;
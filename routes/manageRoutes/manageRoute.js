/**
 * Created by CoderSong on 17/3/16.
 */

let pub = {};

/**
 * 管理端的主页面
 * @param req
 * @param res
 * @param next
 */
pub.managerIndexPage = (req, res, next) => {
  res.render('serverPage/test',{
    "layout": false
  })
};

module.exports = pub;
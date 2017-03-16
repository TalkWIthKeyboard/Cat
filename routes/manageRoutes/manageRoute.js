/**
 * Created by CoderSong on 17/3/16.
 */

let pub = {};

pub.managerIndexPage = (req, res, next) => {
  res.render('serverPage/test',{
    "layout": false
  })
};

module.exports = pub;
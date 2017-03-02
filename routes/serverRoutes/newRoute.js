/**
 * Created by CoderSong on 17/3/1.
 */

let pub = {},
  New = require('./../../models/NewModel'),
  errorInfo = require('./../../conf/basicConf').ERROR_INFO,
  argOps = require('./../../util/argCheckUtil'),
  resSuccessHandler = require('./../../util/resReturnUtil').resSuccessHandler,
  resErrorHandler = require('./../../util/resReturnUtil').resErrorHandler;

/**
 * 创建新闻
 * @param req
 * @param res
 * @param next
 */
pub.createNew = (req, res, next) => {

  let arg = {};

  argOps.createArgAndCheck(req.body, arg, New, (arg) => {
    let _new = {};

    argOps.copyArg(_new, arg);
    newModel = new New(_new);
    newModel.save((err) => {
      if (err) return next(err);
      resSuccessHandler(res);
    })
  }, () => {
    resErrorHandler(res, errorInfo.REQUEST_ERR);
  });
};


/**
 * 更新新闻
 * @param req
 * @param res
 * @param next
 */
pub.updateNew = (req, res, next) => {

    let arg = {},
      id = req.params.id;

    argOps.createArgAndCheck(req.body, arg, New, (arg) => {
      New.findById(id, (err, _new) => {
        if (err) return next(err);
        argOps.copyArg(_new, arg);
        _new.save((err) => {
          if (err) return next(err);
          resSuccessHandler(res);
        })
      })
    }, () => {
      resErrorHandler(res, errorInfo.REQUEST_ERR);
    })
};


/**
 * 删除新闻
 * @param req
 * @param res
 * @param next
 */
pub.deleteNew = (req, res, next) => {

  let id = req.params.id;

  New.deleteById(id, (err) => {
    if (err) return next(err);
    resSuccessHandler(res);
  })
};


module.exports = pub;
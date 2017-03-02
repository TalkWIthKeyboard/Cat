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

    argOps.copyArg(_new, arg.body);
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

  let arg = {};
  arg.params = {};
  arg.params.id = req.params.id || false;

  argOps.createArgAndCheck(req.body, arg, New, (arg) => {
    New.findById(arg.params.id, (err, _new) => {
      if (err) return next(err);
      argOps.copyArg(_new, arg.body);
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

  let arg = {};
  arg.params = {};
  arg.params.id = req.params.id || false;

  argOps.createArgAndCheck(null, arg, null, (arg) => {
    New.deleteById(arg.params.id, (err) => {
      if (err) return next(err);
      resSuccessHandler(res);
    })
  }, () => {
    resErrorHandler(res, errorInfo.REQUEST_ERR)
  });
};


/**
 * 获取一条新闻
 * @param req
 * @param res
 * @param next
 */
pub.getNewById = (req, res, next) => {

  let arg = {};
  arg.params = {};
  arg.params.id = req.params.id || false;

  argOps.createArgAndCheck(null, arg, null, (arg) => {
    New.findById(arg.params.id, (err, _new) => {
      if (err) return next(err);
      resSuccessHandler(res, {'new': _new});
    })
  }, () => {
    resErrorHandler(res, errorInfo.REQUEST_ERR)
  });
};


/**
 * 分页获取新闻
 * @param req
 * @param res
 * @param next
 */
pub.getNewByPage = (req, res, next) => {

  let arg = {};
  arg.params = {};
  arg.params.page = parseInt(req.params.page) || false;

  argOps.createArgAndCheck(null, arg, null, (arg) => {
    New.findAll(arg.params.page, (err, news) => {
      if (err) return next(err);
      resSuccessHandler(res, {
        'page': arg.params.page + 1,
        'news': news
      })
    })
  }, () => {
    resErrorHandler(res, errorInfo.REQUEST_ERR)
  });
};


module.exports = pub;
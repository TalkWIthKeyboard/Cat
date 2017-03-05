/**
 * Created by CoderSong on 17/3/1.
 */

let pub = {},
  New = require('./../../models/NewModel'),
  newType = require('./../../conf/basicConf').NEW_TYPE,
  currencyApiUtil = require('./../../util/currencyApiUtil'),
  argOps = require('./../../util/argCheckUtil'),
  resSuccessHandler = require('./../../util/resReturnUtil').resSuccessHandler,
  resErrorHandler = require('./../../util/resReturnUtil').resErrorHandler;

/**
 * 按种类分页获取
 * @param req
 * @param res
 * @param type
 * @param next
 */
let getInfoByPageAndType = (req, res, type, next) => {
  let arg = {};
  arg.params = {};
  arg.params.page = parseInt(req.params.page) || false;

  argOps.createArgAndCheck(null, arg, null, (arg) => {
    New.findAllByPageAndType(type.number, arg.params.page, (err, data) => {
      if (err) return next(err);

      let jsonRes = {};
      jsonRes[type.info_en] = data;
      jsonRes['page'] = arg.params.page + 1;
      resSuccessHandler(res, jsonRes)
    })
  }, () => {
    resErrorHandler(res, errorInfo.REQUEST_ERR)
  })
};


/**
 * 创建新闻
 * @param req
 * @param res
 * @param next
 */
pub.createNew = (req, res, next) => {
  currencyApiUtil.currencyCreateApi(req, res, New, next);
};


/**
 * 更新新闻
 * @param req
 * @param res
 * @param next
 */
pub.updateNew = (req, res, next) => {
  currencyApiUtil.currencyUpdateApi(req, res, New, next);
};


/**
 * 删除新闻
 * @param req
 * @param res
 * @param next
 */
pub.deleteNew = (req, res, next) => {
  currencyApiUtil.currencyDeleteApi(req, res, New, next);
};


/**
 * 获取一条新闻
 * @param req
 * @param res
 * @param next
 */
pub.getNew = (req, res, next) => {
  currencyApiUtil.currencyGetApi(req, res, New, (_new) => {
    resSuccessHandler(res, {'new': _new});
  }, next)
};


/**
 * 分页获取新闻
 * @param req
 * @param res
 * @param next
 */
pub.getNewByPage = (req, res, next) => {
  getInfoByPageAndType(req, res, newType.NEWS, next);
};


/**
 * 分页获取技术支持
 * @param req
 * @param res
 * @param next
 */
pub.getTechnologyByPage = (req, res, next) => {
  getInfoByPageAndType(req, res, newType.TECHNOLOGY, next);
};


/**
 * 增加浏览记录
 * @param req
 * @param res
 * @param next
 */
pub.addLookNum = (req, res, next) => {
  currencyApiUtil.currencyAddLookApi(req, res, New, next);
};


module.exports = pub;
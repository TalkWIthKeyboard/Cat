/**
 * Created by CoderSong on 17/3/1.
 */

let pub = {},
  New = require('./../../models/NewModel'),
  currencyApiUtil = require('./../../util/currencyApiUtil'),
  resSuccessHandler = require('./../../util/resReturnUtil').resSuccessHandler;

/**
 * 创建新闻
 * @param req
 * @param res
 * @param next
 */
pub.createNew = (req, res, next) => {
  currencyApiUtil.currencyCreateApi(req, res, New, null, next);
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
 * 增加浏览记录
 * @param req
 * @param res
 * @param next
 */
pub.addLookNum = (req, res, next) => {
  currencyApiUtil.currencyAddLookApi(req, res, New, next);
};


module.exports = pub;
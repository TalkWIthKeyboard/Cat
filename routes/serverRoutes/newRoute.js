/**
 * Created by CoderSong on 17/3/1.
 */

let pub = {},
  New = require('./../../models/NewModel'),
  currencyApiUtil = require('./../../util/currencyApiUtil');

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
  currencyApiUtil.currencyGetApiByPage(req, res, New, (page, news) => {
    resSuccessHandler(res, {
      'news': news,
      'page': page + 1
    })
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
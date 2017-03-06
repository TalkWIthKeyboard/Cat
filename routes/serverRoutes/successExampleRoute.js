/**
 * Created by CoderSong on 17/3/5.
 */

let pub = {},
  SuccessExample = require('./../../models/SuccessExampleModel'),
  currencyApiUtil = require('./../../util/currencyApiUtil'),
  resSuccessHandler = require('./../../util/resReturnUtil').resSuccessHandler;

/**
 * 创建成功案例
 * @param req
 * @param res
 * @param next
 */
pub.createSuccessExample = (req, res, next) => {
  currencyApiUtil.currencyCreateApi(req, res, SuccessExample, 'schoolName', next);
};


/**
 * 更新成功案例
 * @param req
 * @param res
 * @param next
 */
pub.updateSuccessExample = (req, res, next) => {
  currencyApiUtil.currencyUpdateApi(req, res, SuccessExample, next);
};


/**
 * 删除成功案例
 * @param req
 * @param res
 * @param next
 */
pub.deleteSuccessExample = (req, res, next) => {
  currencyApiUtil.currencyDeleteApi(req, res, SuccessExample, next);
};


/**
 * 获取一条成功案例
 * @param req
 * @param res
 * @param next
 */
pub.getSuccessExample = (req, res, next) => {
  currencyApiUtil.currencyGetApi(req, res, SuccessExample, (se) => {
    resSuccessHandler(res, {'example': se});
  }, next)
};


/**
 * 分页获取成功案例
 * @param req
 * @param res
 * @param next
 */
pub.getSuccessExampleByPage = (req, res, next) => {
  currencyApiUtil.currencyGetApiByPage(req, res, SuccessExample, (page, examples) => {
    resSuccessHandler(res, {
      'page': page + 1,
      'examples': examples
    })
  }, next)
};


module.exports = pub;
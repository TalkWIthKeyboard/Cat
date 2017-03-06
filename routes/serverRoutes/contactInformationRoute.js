/**
 * Created by CoderSong on 17/2/28.
 */

let pub = {},
  argOps = require('./../../util/argCheckUtil'),
  resSuccessHandler = require('./../../util/resReturnUtil').resSuccessHandler,
  resErrorHandler = require('./../../util/resReturnUtil').resErrorHandler,
  ContactInformation = require('./../../models/ContactInformationModel'),
  currencyApiUtil = require('./../../util/currencyApiUtil');

/**
 * 创建联系方式
 * @param req
 * @param res
 * @param next
 */
pub.createContact = (req, res, next) => {
  currencyApiUtil.currencyCreateApi(req, res, ContactInformation, null, next);
};

/**
 * 更新联系方式
 * 因为联系方式中仅存在一条所以比较特殊不能使用通用函数
 * @param req
 * @param res
 * @param next
 */
pub.updateContact = (req, res, next) => {

  let arg = {};

  argOps.createArgAndCheck(req.body, arg, null, (arg) => {
    ContactInformation.findFirst((err, contact) => {
      if (err) return next(err);

      argOps.copyArg(contact, arg.body);
      contact.save((err) => {
        if (err) return next(err);
        resSuccessHandler(res);
      })
    })
  }, () => {
    resErrorHandler(res, errorInfo.REQUEST_ERR);
  });
};


module.exports = pub;
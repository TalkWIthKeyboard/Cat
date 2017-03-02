/**
 * Created by CoderSong on 17/2/28.
 */

let pub = {},
  ContactInformation = require('./../../models/ContactInformationModel'),
  errorInfo = require('./../../conf/basicConf').ERROR_INFO,
  argOps = require('./../../util/argCheckUtil'),
  resSuccessHandler = require('./../../util/resReturnUtil').resSuccessHandler,
  resErrorHandler = require('./../../util/resReturnUtil').resErrorHandler;

/**
 * 创建联系方式
 * @param req
 * @param res
 * @param next
 */
pub.createContact = (req, res, next) => {

  let arg = {};

  argOps.createArgAndCheck(req.body, arg, ContactInformation, (arg) => {
    let _contact = {};

    argOps.copyArg(_contact, arg.body);
    contactModel = new ContactInformation(_contact);
    contactModel.save((err) => {
      if (err) return next(err);
      resSuccessHandler(res);
    })
  }, () => {
    resErrorHandler(res, errorInfo.REQUEST_ERR);
  });
};


/**
 * 更新联系方式
 * @param req
 * @param res
 * @param next
 */
pub.updateContact = (req, res, next) => {

  let arg = {};

  argOps.createArgAndCheck(req.body, arg, ContactInformation, (arg) => {
    ContactInformation.findAll((err, contacts) => {
      if (err) return next(err);

      let contact = contacts[0];
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
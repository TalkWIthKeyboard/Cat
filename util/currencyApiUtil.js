/**
 * Created by CoderSong on 17/3/2.
 * 高度抽象增删查改、分页查找5种API方法
 */

const pub = {},
  errorInfo = require('./../conf/basicConf').ERROR_INFO,
  Promise = require('promise'),
  argOps = require('./argCheckUtil'),
  resSuccessHandler = require('./resReturnUtil').resSuccessHandler,
  resErrorHandler = require('./resReturnUtil').resErrorHandler,
  promiseUtil = require('./promiseUtil'),
  _ = require('underscore');


/**
 * 保存对象的操作
 * @param res
 * @param arg
 * @param modelClass
 * @param next
 */
let saveObjFunc = (res, arg, modelClass, next) => {

  let data = {};
  argOps.copyArg(data, arg.body);
  dataModel = new modelClass(data);
  dataModel.save((err) => {
    if (err) return next(err);
    resSuccessHandler(res);
  })
};


/**
 * 全部class类参数参加的createAPI
 *（如果需要检查是否重复，需要配置checkIsExist方法
 * @param req
 * @param res
 * @param modelClass
 * @param key
 * @param next
 */
pub.currencyCreateApi = (req, res, modelClass, key, next) => {

  let arg = {};

  argOps.createArgAndCheck(req.body, arg, modelClass, (arg) => {
    if (key) {
      let checkIsExistPromise = new Promise((resolve, reject) => {
        modelClass.checkIsExist(arg.body[key], (err, obj) => {
          err ? reject(err) : resolve(obj)
        })
      });

      // 检查重复
      checkIsExistPromise.then((obj) => {
        obj
          ? resErrorHandler(res, errorInfo.EXIST_ERR)
          : saveObjFunc(res, arg, modelClass, next)
      }, (err) => {
        return next(err);
      });
    } else {
      saveObjFunc(res, arg, modelClass, next)
    }
  }, () => {
    resErrorHandler(res, errorInfo.REQUEST_ERR);
  });
};


/**
 * 全部class类参数参加的updateAPI
 * （另需要传入id，类需要配置findById方法
 * @param req
 * @param res
 * @param modelClass
 * @param next
 */
pub.currencyUpdateApi = (req, res, modelClass, next) => {

  let arg = {};
  arg.params = {};
  arg.params.id = req.params.id || false;

  argOps.createArgAndCheck(req.body, arg, modelClass, (arg) => {
    modelClass.findById(arg.params.id, (err, data) => {
      if (err) return next(err);
      argOps.copyArg(data, arg.body);
      data.save((err) => {
        if (err) return next(err);
        resSuccessHandler(res);
      })
    })
  }, () => {
    resErrorHandler(res, errorInfo.REQUEST_ERR);
  })
};

/**
 * 通用的deleteAPI
 * （另需要传入id，类需要配置deleteById方法
 * @param req
 * @param res
 * @param modelClass
 * @param next
 */
pub.currencyDeleteApi = (req, res, modelClass, next) => {

  let arg = {};
  arg.params = {};
  arg.params.id = req.params.id || false;

  argOps.createArgAndCheck(null, arg, null, (arg) => {
    modelClass.deleteById(arg.params.id, (err) => {
      if (err) return next(err);
      resSuccessHandler(res);
    })
  }, () => {
    resErrorHandler(res, errorInfo.REQUEST_ERR)
  });
};


/**
 * 通用的getApi
 *（另需要传入id，类需要配置findById方法
 * @param req
 * @param res
 * @param modelClass
 * @param scb
 * @param next
 */
pub.currencyGetApi = (req, res, modelClass, scb, next) => {

  let arg = {};
  arg.params = {};
  arg.params.id = req.params.id || false;

  argOps.createArgAndCheck(null, arg, null, (arg) => {
    modelClass.findById(arg.params.id, (err, data) => {
      if (err) return next(err);
      scb(data);
    })
  }, () => {
    resErrorHandler(res, errorInfo.REQUEST_ERR)
  });
};


/**
 * 通用的分页查询API
 *（另需要传入page，类需要配置findAllByPage方法
 * @param req
 * @param res
 * @param modelClass
 * @param scb 成功回调
 * @param next
 */
pub.currencyGetApiByPage = (req, res, modelClass, scb, next) => {

  let arg = {};
  arg.params = {};
  arg.params.page = parseInt(req.params.page) || false;

  argOps.createArgAndCheck(null, arg, null, (arg) => {
    let promiseList = [
      promiseUtil.getAllByPagePromise(modelClass, arg.params.page),
      promiseUtil.getAllCountPromise(modelClass)
    ];
    Promise.all(promiseList).then((results) => {
      let data = results[0],
        pageCount = results[1];
      scb(arg.params.page, pageCount, data);
    }).catch((err) => {
      next(err);
    });
  }, () => {
    resErrorHandler(res, errorInfo.REQUEST_ERR)
  });
};


/**
 * 通用的添加浏览记录API
 * （另需要传入id，类需要配置findById方法，类存在look属性
 * @param req
 * @param res
 * @param modelClass
 * @param next
 */
pub.currencyAddLookApi = (req, res, modelClass, next) => {

  let arg = {};
  arg.params = {};
  arg.params.id = req.params.id || false;

  // 检测是否存在look属性
  if (!_.has(modelClass.schema.obj, 'look')) resErrorHandler(res, errorInfo.INVALID_ERR);

  argOps.createArgAndCheck(null, arg, null, (arg) => {
    modelClass.findById(arg.params.id, (err, data) => {
      if (err) return next(err);
      data.look += 1;
      data.save((err) => {
        if (err) return next(err);
        resSuccessHandler(res);
      })
    })
  }, () => {
    resErrorHandler(res, errorInfo.REQUEST_ERR)
  })
};


module.exports = pub;

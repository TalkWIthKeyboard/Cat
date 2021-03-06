/**
 * Created by CoderSong on 17/3/1.
 */

let pub = {},
  _ = require('underscore'),
  productSeries = require('./../conf/basicConf').PRODUCT_SERIES;

/**
 * 创建实体类参数并检查
 * @param body
 * @param arg 参数数组
 * @param module 实体类
 * @param scb 成功回调
 * @param fcb 失败回调
 */
pub.createArgAndCheck = (body, arg, module, scb, fcb) => {

  arg.body = {};

  // 实体类的转换
  if (module) {
    let moduleObj = module.schema.obj;
    delete moduleObj.meta;

    _.map(_.keys(moduleObj), (value) => {
      arg.body[value] = false;
    });
  }

  // 存在req.body
  if (body) {
    _.mapObject(body, (val, key) => {
      arg.body[key] = val;
    });
  }

  let flag = true,
    checkArg = {};

  // 融合arg的params部分和body部分
  if (arg.params) {
    checkArg = arg.body;
    _.mapObject(arg.params, (value, key) => {
      checkArg[key] = value;
    });
  }

  // 检测arg的body和params部分
  _.map(_.values(checkArg), (value) => {
    flag = !value && typeof value == "boolean" ? false : flag;
  });

  flag ? scb(arg) : fcb();
};

/**
 * 拷贝一个object的部分属性
 * @param entity
 * @param arg
 */
pub.copyArg = (entity, arg) => {

  _.mapObject(arg, (val, key) => {
    entity[key] = val;
  });
};

/**
 * 通过中文查找产品的index
 * @param cn
 * @returns {number}
 */
pub.productIndex = (cn) => {
  _.map(productSeries, (obj, index) => {
    if (obj.cn === cn) {
      return index;
    }
  });
  return -1;
};

module.exports = pub;

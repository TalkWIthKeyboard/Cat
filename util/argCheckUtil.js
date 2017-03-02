/**
 * Created by CoderSong on 17/3/1.
 */

let pub = {},
  _ = require('underscore');

/**
 * 创建实体类参数并检查
 * @param body
 * @param arg 参数数组
 * @param module 实体类
 * @param scb 成功回调
 * @param fcb 失败回调
 */
pub.createArgAndCheck = (body, arg, module, scb, fcb) => {

  let moduleObj = module.schema.obj;
  delete moduleObj.meta;

  _.map(_.keys(moduleObj), (value) => {
    arg[value] = false;
  });

  _.mapObject(body, (val, key) => {
    arg[key] = val;
  });

  let flag = true;

  _.map(_.values(arg), (value) => {
    flag = flag && value;
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

module.exports = pub;

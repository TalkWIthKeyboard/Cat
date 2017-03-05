/**
 * Created by CoderSong on 17/3/5.
 */

// 该表中仅保存一条配置信息
let mongoose = require('mongoose'),
  config = require('./../conf/basicConf');

let ConfigureSchema = new mongoose.Schema({
  key: String,
  value: String,
  // 说明
  info: String,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
});

ConfigureSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  }
  else {
    this.meta.updateAt = Date.now()
  }
  next()
});

ConfigureSchema.statics = {
  findAllByPage: function (nowPage, cb) {
    return this
      .find({})
      .skip(nowPage - 1)
      .limit(config.pageSize)
      .sort('meta.createAt')
      .exec(cb)
  },

  findByKey: function (key, cb) {
    return this
      .findOne({key: key})
      .exec(cb)
  },

  findById: function (id, cb) {
    return this
      .find({_id: id})
      .exec(cb)
  },

  deleteById: function (id, cb) {
    return this
      .remove({_id: id})
      .exec(cb)
  }
};


module.exports = ConfigureSchema;
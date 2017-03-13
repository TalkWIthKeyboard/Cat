/**
 * Created by CoderSong on 17/3/5.
 */

const mongoose = require('mongoose'),
  config = require('./../conf/basicConf');

let SuccessExampleSchema = new mongoose.Schema({
  // 证书图片
  img: String,
  // 证书图片
  name: String,
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

SuccessExampleSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  }
  else {
    this.meta.updateAt = Date.now()
  }
  next()
});

SuccessExampleSchema.statics = {
  findAllByPage: function (nowPage, cb) {
    return this
      .find({})
      .skip((nowPage - 1) * config.imgPageSize)
      .limit(config.imgPageSize)
      .sort('meta.createAt')
      .exec(cb)
  },

  findAllCount: function (cb) {
    return this
      .find({})
      .count()
      .exec(cb)
  },

  checkIsExist: function (name, cb) {
    return this
      .findOne({name: name})
      .exec(cb)
  },

  findById: function (id, cb) {
    return this
      .findOne({_id: id})
      .exec(cb)
  },

  deleteById: function (id, cb) {
    return this
      .remove({_id: id})
      .exec(cb)
  }
};

module.exports = SuccessExampleSchema;
/**
 * Created by CoderSong on 17/3/5.
 */

const mongoose = require('mongoose'),
  config = require('./../conf/basicConf');

let SuccessExampleSchema = new mongoose.Schema({
  // 学校图片
  img: String,
  // 学校名称
  schoolName: String,
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
      .skip((nowPage - 1) * config.pageSize)
      .limit(config.pageSize)
      .sort('meta.createAt')
      .exec(cb)
  },

  checkIsExist: function (schoolName, cb) {
    return this
      .findOne({schoolName: schoolName})
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
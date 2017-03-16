/**
 * Created by CoderSong on 17/3/6.
 */

let mongoose = require('mongoose'),
  config = require('./../conf/basicConf');

let DownloadSchema = new mongoose.Schema({
  title: String,
  content: String,
  url: String,
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

DownloadSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  }
  else {
    this.meta.updateAt = Date.now()
  }
  next()
});

DownloadSchema.statics = {
  findAllByPage: function (nowPage, cb) {
    return this
      .find({})
      .skip((nowPage - 1) * config.pageSize)
      .limit(config.pageSize)
      .sort('meta.createAt')
      .exec(cb)
  },

  findAllCount: function (cb) {
    return this
      .find({})
      .count()
      .exec(cb)
  },

  findById: function (id, cb) {
    return this
      .findOne({_id: id})
      .exec(cb)
  },

  checkIsExist: function (title, cb) {
    return this
      .findOne({title: title})
      .exec(cb)
  },

  deleteById: function (id, cb) {
    return this
      .remove({_id: id})
      .exec(cb)
  }
};

module.exports = DownloadSchema;
/**
 * Created by CoderSong on 17/3/1.
 */

const mongoose = require('mongoose'),
  config = require('./../conf/basicConf');

let NewSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  content: String,
  look: Number,
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

NewSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  }
  else {
    this.meta.updateAt = Date.now()
  }
  next()
});

NewSchema.statics = {
  findAll: function (nowPage, cb) {
    return this
      .find({})
      .skip(nowPage - 1)
      .limit(config.pageSize)
      .sort('meta.createAt')
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


module.exports = NewSchema;
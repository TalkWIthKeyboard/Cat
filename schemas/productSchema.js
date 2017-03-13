/**
 * Created by CoderSong on 17/3/2.
 */

const mongoose = require('mongoose'),
  config = require('./../conf/basicConf');

let ProductSchema = new mongoose.Schema({
  // 产品名
  name: String,
  // 产品系列
  series: String,
  // 产品型号
  model: String,
  // 产品详细
  content: String,
  // 产品参数
  params: String,
  // 相关产品
  relatedProducts: [{
    type : mongoose.Schema.ObjectId,
    ref : 'Product'
  }],
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

ProductSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  }
  else {
    this.meta.updateAt = Date.now()
  }
  next()
});

ProductSchema.statics = {
  findAllBySeriesAndPage: function (nowPage, series, cb) {
    return this
      .find({series: series})
      .skip((nowPage - 1) * config.productPageSize)
      .limit(config.productPageSize)
      .sort('meta.createAt')
      .exec(cb)
  },

  findAllBySeriesCount: function (series, cb) {
    return this
      .find({series: series})
      .count()
      .exec(cb)
  },

  findAllByPage: function (nowPage, cb) {
    return this
      .find({})
      .skip((nowPage - 1) * config.productPageSize)
      .limit(config.productPageSize)
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

  deleteById: function (id, cb) {
    return this
      .remove({_id: id})
      .exec(cb)
  }
};


module.exports = ProductSchema;
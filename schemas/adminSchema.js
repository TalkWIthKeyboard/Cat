/**
 * Created by CoderSong on 17/3/19.
 */

const mongoose = require('mongoose');

let AdminSchema = new mongoose.Schema({
  // 用户名
  username: String,
  // 密码
  password: String,
  // 用户类型(使用API/登录后台)
  type: String,
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

AdminSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  }
  else {
    this.meta.updateAt = Date.now()
  }
  next()
});

AdminSchema.statics = {
  checkIsExist: function (username, cb) {
    return this
      .findOne({username: username})
      .exec(cb)
  },

  findById: function (id, cb) {
    return this
      .findOne({_id: id})
      .exec(cb)
  },

  findAll: function (cb) {
    return this
      .find({})
      .exec(cb)
  },

  deleteById: function (id, cb) {
    return this
      .remove({_id: id})
      .exec(cb)
  }
};

module.exports = AdminSchema;
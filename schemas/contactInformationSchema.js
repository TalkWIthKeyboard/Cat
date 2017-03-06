/**
 * Created by CoderSong on 17/2/28.
 */

// 该表中仅保存一条配置信息
let mongoose = require('mongoose');

let ContactInformationSchema = new mongoose.Schema({
  // 联系人的姓名和手机
  peoplePhone: [{
    name: String,
    phone: String
  }],
  // 电话
  telephone: [String],
  // 传真
  fax: [String],
  // 邮箱
  email: [String],
  // 地址
  address: String,
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

ContactInformationSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  }
  else {
    this.meta.updateAt = Date.now()
  }
  next()
});

ContactInformationSchema.statics = {
  findFirst: function (cb) {
    return this
      .findOne({})
      .exec(cb)
  }
};


module.exports = ContactInformationSchema;
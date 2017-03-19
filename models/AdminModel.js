/**
 * Created by CoderSong on 17/3/19.
 */


let mongoose = require('mongoose'),
  AdminSchema = require('./../schemas/adminSchema'),
  Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;
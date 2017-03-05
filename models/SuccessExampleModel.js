/**
 * Created by CoderSong on 17/3/5.
 */

let mongoose = require('mongoose'),
  SuccessExampleSchema = require('./../schemas/successExampleSchema'),
  SuccessExample = mongoose.model('SuccessExample', SuccessExampleSchema);

module.exports = SuccessExample;
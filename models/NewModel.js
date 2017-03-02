/**
 * Created by CoderSong on 17/3/1.
 */

let mongoose = require('mongoose'),
  NewSchema = require('./../schemas/newSchema'),
  New = mongoose.model('New',NewSchema);

module.exports = New;
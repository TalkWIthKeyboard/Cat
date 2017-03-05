/**
 * Created by CoderSong on 17/3/5.
 */

let mongoose = require('mongoose'),
  ConfigureModel = require('./../schemas/configureSchema'),
  Configure = mongoose.model('Configure', ConfigureModel);

module.exports = Configure;
/**
 * Created by CoderSong on 17/3/5.
 */

let mongoose = require('mongoose'),
  CertificateSchema = require('./../schemas/certificateSchema'),
  Certificate = mongoose.model('Certificate', CertificateSchema);

module.exports = Certificate;
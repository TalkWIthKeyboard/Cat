/**
 * Created by CoderSong on 17/3/6.
 */

let mongoose = require('mongoose'),
  DownloadSchema = require('./../schemas/downloadSchema'),
  Download = mongoose.model('Download',DownloadSchema);

module.exports = Download;
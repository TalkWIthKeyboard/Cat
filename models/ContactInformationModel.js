/**
 * Created by CoderSong on 17/2/28.
 */

let mongoose = require('mongoose'),
  ContactInformationSchema = require('./../schemas/contactInformationSchema'),
  ContactInformation = mongoose.model('ContactInformation',ContactInformationSchema);

module.exports = ContactInformation;
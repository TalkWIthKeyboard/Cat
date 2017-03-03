/**
 * Created by CoderSong on 17/3/2.
 */

let mongoose = require('mongoose'),
  ProductSchema = require('./../schemas/productSchema'),
  Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
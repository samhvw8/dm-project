'use strict'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('./db');

var ProductSchema = new Schema({
    _id: Number,
    name: String,
    type: String,
    img: String,
    detail: {},
    price: Number
});

ProductSchema.plugin(autoIncrement.plugin, 'product');


module.exports = mongoose.model('product', ProductSchema);
'use strict';

const mongoose = require('mongoose');

const categories = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type:String, required: false },
  inStock: {type: Boolean, required: false},
});

module.exports = mongoose.model('categories ', categories);

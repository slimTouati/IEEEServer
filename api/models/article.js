'use strict';
var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
 title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required : true
  },
  image:
  {
    type: String,
    required: false
  },
  date: {
    type: Date,
    required : true,
    default: Date.now()
  },
  ownerID: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true

  },
  verified: {
    type: Boolean,
    required : true,
    default: false
  }
 
});

module.exports = mongoose.model('Article', ArticleSchema);

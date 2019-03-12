'use strict';
var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var LikesSchema = new Schema({
 userId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required:true
  },
  articleId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Article',
    required:true
  },
  type:
  {
    type: Number,
    required: true
  }
 
 
});

module.exports = mongoose.model('Likes', LikesSchema);
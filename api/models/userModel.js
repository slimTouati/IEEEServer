'use strict';
var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var UserSchema = new Schema({
 first_name: {
    type: String,
    required: true
  },
  second_name: {
    type: String,
    required : true
  },
  email:
  {
    type: String,
    required: true
  },
  password: {
    type: String,
    required : true
  },
  birthDate: {
    type: Date,
    required : true
  },
  role: {
    type: String,
    required : false,
    default: "Simple user"
  },
  image: {
    type: String,
    required : false,
    default:"default.png"
    }
 
});

module.exports = mongoose.model('User', UserSchema);

'use strict';


var mongoose = require('mongoose'),
  User = mongoose.model('User');

exports.list_all_users = function(req, res) {
 
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.create_a_user = function(req, res) {
  var new_user = new User({
    first_name:req.body.first_name,
    second_name:req.body.second_name,
    email:req.body.email,
    password:req.body.password,
    birthDate:req.body.birthDate,
    image:req.file.fieldname + "-" + Date.now() + "-" + req.file.originalname,
    role:req.body.role});
new_user.save(function(err, user) {
if (err)
res.send(err);
res.json(user);
});
};


exports.read_a_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};
exports.login_user = function(req, res) {
  User.findOne({email:req.params.email}, function(err, user) {
    if (err)
      {res.send(err);
      }
    if(user==null)
    {res.send("couldn't find email");}  
    else if (req.params.password==user.password) 
    res.json(user);
    else{res.send("check the password");}
  });
};


exports.update_a_user = function(req, res) {
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.delete_a_user = function(req, res) {
  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'user successfully deleted' });
  });
};

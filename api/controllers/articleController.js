'use strict';


var mongoose = require('mongoose'),
  Article = mongoose.model('Article'),
  User = mongoose.model('User'),
  Likes = mongoose.model('Likes');

exports.list_all_articles = function(req, res) {
 
    Article.find({}, function(err, article) {
    if (err)
      res.send(err);
    res.json(article);
  });
};

exports.create_an_article = function(req, res) {
  var new_article = new Article({
    title:req.body.title,
    content:req.body.content,
    date:req.body.date,
    password:req.body.password,
    ownerID:req.body.ownerID,
    image:req.file.fieldname + "-" + Date.now() + "-" + req.file.originalname,
    verified:req.body.verified
   });
new_article.save(function(err, article) {
if (err)
res.send(err);
res.json(article);
});
};


exports.read_an_article = function(req, res) {
    Article.findById(req.params.articleId, function(err, article) {
    if (err)
      res.send(err);
   // res.json(article);
  }).then(article => {
    User.findById(article.ownerID).then(user => {
        //res.json(user);
        var viewarticle = {
            data: {
              title : article.title,
              content : article.content.substring(0,100),
              image: article.image,
              date: article.date,
              verified: article.verified,
              firstname: user.firstname,
              secondname: user.secondname,
              userimage: user.image
            }
          }
          res.json(viewarticle);
    });
  });
};



exports.update_an_article = function(req, res) {
    Article.findOneAndUpdate({_id: req.params.articleId}, req.body, {new: true}, function(err, article) {
    if (err)
      res.send(err);
    res.json(article);
  });
};


exports.delete_an_article = function(req, res) {
    Article.remove({
    _id: req.params.articleId
  }, function(err, article) {
    if (err)
      res.send(err);
    res.json({ message: 'article successfully deleted' });
  });
};

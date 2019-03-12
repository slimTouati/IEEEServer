'use strict';
const multer = require('multer');
  
  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __basedir + '/uploads/')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
    }
  });
  
  var upload = multer({storage: storage});
module.exports = function(app) {
  var articleCnt = require('../controllers/articleController');

  // articleCnt Routes
  app.route('/articles')
    .get(articleCnt.list_all_articles)
    .post(upload.single("uploadfile"),articleCnt.create_an_article);


  app.route('/article/:articleId')
    
    .put(articleCnt.update_an_article)
    .delete(articleCnt.delete_an_article);

  app.route('/articles/findanarticle/:articleId')
    .get(articleCnt.read_an_article);

  
    
};

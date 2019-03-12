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
  var userCnt = require('../controllers/userController');

  // userCnt Routes
  app.route('/users')
    .get(userCnt.list_all_users)
    .post(upload.single("uploadfile"),userCnt.create_a_user);


  app.route('/user/:userId')
    
    .put(userCnt.update_a_user)
    .delete(userCnt.delete_a_user);

  app.route('/users/findauser/:userId')
    .get(userCnt.read_a_user);

  app.route('/userlogin/:email/:password')
    .get(userCnt.login_user);  
    
};

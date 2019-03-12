const express = require('express'),

  app = express(),
  port = process.env.PORT || 3001,
  
  mongoose = require('mongoose'),
  User = require('./api/models/userModel'),
  Like = require('./api/models/likesModel'),
  Article = require('./api/models/article'),
  bodyParser = require('body-parser');

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/tcs', { useNewUrlParser: true });
  global.__basedir=__dirname;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/articleRoutes.js');
routes(app);

var routes = require('./api/routes/userRoutes');
routes(app);




app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });
 
  
  

  app.listen(port);
  console.log('RESTful API server started on: ' + port);
  
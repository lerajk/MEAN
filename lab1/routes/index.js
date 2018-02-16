var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var store; 
var name; 

/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});

router.post('/feedback', function(req, res, next) {
  store = req.body.email;

  //console.log(store);
  res.render('feedback', { title: store });
});

router.post('/thanks', function(req, res, next) {
  name = req.body.firstname;
  res.render('thanks', { title: name });
});

module.exports = router;

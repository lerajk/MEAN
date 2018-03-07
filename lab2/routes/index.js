var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var user = require('../controller/user'); 
var auth = require('http-auth');


var basic = auth.basic({
    realm: 'SUPER SECRET STUFF'
}, function(username, password, callback) {
    callback(username == 'admin' && password == 'pass');
});

var authMiddleware = auth.connect(basic);


router.get('/signup', function(req, res, next) {  
  res.render('signup', { title: '' });
});

router.get('/', function(req, res, next) {
  res.render('login', { title: '' });
});

router.post('/login', user.create);  

router.post('/feedback', user.list); 


router.post('/thanks', user.update);

//ADMIN FUNCTIONS

router.get('/view', authMiddleware,  function(req, res, next) {
  //res.send('view working')
  res.render('view', { title: '' });
});

router.post('/viewfeedback', authMiddleware, user.view); 


module.exports = router;


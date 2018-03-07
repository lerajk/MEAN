//var User = require('mongoose').model('User');
var User = require('../model/db');
var bodyParser = require('body-parser');


module.exports.create = function (req,res){

    // add request
    User.create({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        pass: req.body.pass,
        favSub: req.body.favoritesubject,
        favActor: req.body.favoriteactor,
        comments: req.body.comments
    }, function(err,user){
       if (err) return res.status(500).send("There was a problem adding the information to the database.");
            console.log('success:' + user);
            res.render('login', {
            title: ''
        }); 
    });
     
};

// Create a new 'list' controller method
exports.list = function (req, res, next) {

    var first = req.body.firstname;
    var last = req.body.lastname;
    var comments = req.body.comments;
    var subject = req.body.favoritesubject;
    var actor = req.body.favoriteactor;
    var Uemail = req.body.email;

    console.log(Uemail);
    // Use the 'User' instance's 'find' method to retrieve a new user document
    User.findOne({email: Uemail}, function (err, user) {
        if (err) {
            return next(err);
        } else {

            //console.log(user);    
            res.render('feedback', {
                Useremail: user.email,
                First: user.firstName,
                Last: user.lastName,
                Comments: user.comments,
                Actor: user.favActor,
                Subject: user.favSub
            }); 
        }
    });
};


// Create a new 'list' controller method
exports.view = function (req, res, next) {
  
    var Uemail = req.body.emailview;
    //console.log(Uemail);    
    // Use the 'User' instance's 'find' method to retrieve a new user document
    User.findOne({email: Uemail}, function (err, user) {
        if (err) {
            return next(err);
        } else {
            //console.log(user);    
            res.render('viewfeedback', {
                title: Uemail,
                comments: user.comments         
            }); 
        }
    });   

}; 



// Create a new 'list' controller method
exports.update = function (req, res, next) {
  
    let object = {};   

    object.firstName = req.body.firstname;
    object.lastName = req.body.lastname;
    object.email = req.body.email;
    object.comments = req.body.comments;    
    object.favSub = req.body.favoritesubject;
    object.favActor = req.body.favoriteactor;

    let query = {email:req.body.email};

    console.log(object);
    console.log(query);

    User.update(query, object, function(err){
            if(err){ 
                console.log(err);
                return;
            } else {               
                
                res.render('thanks', {
                name: req.body.firstname,
                feedback: req.body.comments        
            }); 
          
            }

        }); // data update 
  

}; 

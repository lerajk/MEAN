var mongoose = require( 'mongoose' );

var dbURI = 'mongodb://localhost/lab2';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
console.log('Mongoose connection error: ' + err);
});


// Load the Mongoose module and Schema object
Schema = mongoose.Schema;
// Define a new 'UserSchema'
var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    pass: String,
    favSub: String,
    favActor: String,
    comments: String
});
// Create the 'User' model out of the 'UserSchema'
var user =  mongoose.model('User', UserSchema);

module.exports = user;


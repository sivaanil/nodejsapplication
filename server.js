var express = require('express');
var config = require('./config.json');
console.log(config.host, config.port);
var db = require('./db.js');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var underscore = require('underscore');
var url = require('url');
var app = express();
var cors = require('cors');
var crypto = require('crypto');
app.use(cors({origin: '*'}));

db.Connection();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
            
app.get('/', function(req, res){
  res.redirect('/index.html');
});
// To fetch all users
app.get('/fetchusers',function(req, res){
		db.getUsers(function (data) {
			var finalData = {
				'users':data,
				'count': data.length
			}
			res.send(finalData);
		});
});
// TO fetch single user details
app.get('/fetchuser/:id',function(req, res){
	var userId = req.params.id;
	db.getUser(userId,function (finalData) {
		res.json(finalData);
	});

});

app.post('/user/createuser',function (req,res) {
	var newUser = req.body.newUserDetails;
	db.createUser(newUser,function (finalData) {
		res.json(finalData);
	});
})


app.get('/user/update/:id',function (req,res) {
	console.log('sdsd');
})
app.listen(config.port,config.host);
console.log("Server Running on port 1321");

var express = require('express');
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
app.use(cors({origin: '*'}));

db.Connection();
app.use(express.static(__dirname + '/public'));
            
app.get('/', function(req, res){
  res.redirect('/index.html');
});
// To fetch all users
app.get('/fetchusers',function(req, res){
		db.getUsers(function (finalData) {
			res.json(finalData);
		});
});
// TO fetch single user details
app.get('/fetchuser/:id',function(req, res){
	var userId = req.params.id;
	

});
app.listen(1321);
console.log("Server Running on port 1321");

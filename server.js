var express = require('express');
var config = require('./config.json');
var db = require('./db.js');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var underscore = require('underscore');
var multer = require('multer');
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
	var fileInfo = req.file;
	console.log(newUser);
	db.createUser(newUser,function (finalData) {
		if(finalData.rowsAffected > 0){


		}
		res.json(finalData);
	});
})


// For File upload
var storage	=	multer.diskStorage({
	destination: function (req, file, callback) {
		callback(null, './uploads');
	},
	filename: function (req, file, callback) {
		callback(null, file.originalname);
	}
});
var upload = multer({ storage : storage}).single('file');

app.post('/upload', function(req, res) {
	upload(req,res,function(err) {
		if(err) {
			return res.end(JSON.stringify(err));
		}
		res.end(JSON.stringify(req.file));
	});
});

// File upload end

app.get('/user/update/:id',function (req,res) {
	console.log('sdsd');
})
app.listen(config.port,config.host);
console.log("Server Running on port 1321");

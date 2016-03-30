var express = require('express');
var db = require('./public/scripts/db.js');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var underscore = require('underscore');
var app = express();
var cors = require('cors');
app.use(cors({origin: '*'}));

db.Connection();
app.use(express.static(__dirname + '/public'));
            
app.get('/', function(req, res){
  res.redirect('/index.html');
});
app.get('/fetchusers',function(req, res){
		users = db.getUsers();
		console.log(users);
		res.end();
});
app.listen(1321);
console.log("Server Running on port 1321");

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
var players={"players":[
            {"name":"Messi", "goals":8},            
            {"name":"Ronaldo", "goals":22},
            {"name":"Costa", "goals":20},
            {"name":"Neymar", "goals":13},
            {"name":"Arabi", "goals":6},
            {"name":"Bale", "goals":3},
            {"name":"Toquero", "goals":0}]};
            
app.get('/', function(req, res){
  res.redirect('/index.html');
});
app.get('/fetchusers',function(req, res){
		res.json(players);
});
app.listen(1321);
console.log("Server Running on port 1321");

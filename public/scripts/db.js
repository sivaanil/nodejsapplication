var mysql = require('mysql');
var exports = module.exports = {};

    exports.Connection = function(){
		var con = mysql.createConnection({
			  host: "localhost",
			  user: "root",
			  password: "root123"
		     });

			con.connect(function(err){
			  if(err){
			    console.log('Error connecting to Db');
			    return;
			  }
			  console.log('Connection established');
			});

    }



var mysql = require('mysql');
var exports = module.exports = {};
var con = {};
var users;
module.exports = {
	Connection : Connection,
    getUsers: getUsers,
    getUser: getUser
}

    function Connection(){
		con = mysql.createConnection({
			  host: "localhost",
			  user: "root",
			  password: "root123",
			  database : "node"
		     });

			con.connect(function(err){
			  if(err){
			    console.log('Error connecting to Db');
			    return;
			  }
			  console.log('DB Connection established');
			});
    }
     function getUsers (cb) {
		 var final = [];
     	 con.query('SELECT * FROM wp_users',function(err, rows) {
            if (err) {
                cb(err, null);
            } else {
				cb(rows);
			}
        });
  }

function getUser (userId,cb) {
	var final = [];
	con.query('SELECT * FROM wp_users where id='+userId, function (err, rows) {
		if (err) {
			cb(err, null);
		} else {
			cb(rows);
		}
	});
}




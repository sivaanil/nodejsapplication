var mysql = require('mysql');
var exports = module.exports = {};
var con = {};
var users;
var crypto = require('crypto');
module.exports = {
	Connection : Connection,
    getUsers: getUsers,
    getUser: getUser,
	createUser: createUser
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

function createUser(newUser,cb){
	d = new Date();
	var formatted = d.toLocaleString();
	formatted  = crypto.createHash('md5').update(formatted).digest("hex");
	newUser.user_pass = formatted;
	newUser.user_nicename = newUser.display_name;
	newUser.user_registered = d.toLocaleString();
	var query = con.query('INSERT INTO wp_users set ?',newUser, function (err, rows) {
		if (err) {
			cb(err, null);
		} else {
			cb(rows);
		}
	});
}




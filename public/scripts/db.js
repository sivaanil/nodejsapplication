var mysql = require('mysql');
var exports = module.exports = {};
var con = {};
var users;
module.exports = {
	Connection : Connection,
    getUsers: getUsers
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
     function getUsers () {
     	 con.query('SELECT * FROM users',function(err, rows) {
            if (err) {
                callback(err, null);
            } else 
                return mysql.format(rows);
        });
  }




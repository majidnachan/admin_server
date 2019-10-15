/*MySQL connection file*/

const mysql = require('mysql');

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'admin'
});

connection.connect();

module.exports = connection;

'user strict';

var mysql = require('mysql');

//local mysql db connection
var conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'users_service',
    password : '1234',
    database : 'gmail'
});

conn.connect(function(err) {
    if (err) throw err;
});

module.exports = conn;
var express = require('express');
var mysql = require('mysql');
var mysqltorest  = require('mysql-to-rest');
var app = express();

var connection = mysql.createPool({
  connectionLimit : 10,
  host            : process.env.IP,
  user            : process.env.C9_USER,
  database        : 'c9',
  password        : ''
});

var api = mysqltorest(app,connection);
//Dont forget to start the server
app.listen(8000);

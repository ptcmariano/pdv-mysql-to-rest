var express = require('express');
var mysql = require('mysql');
var mysqltorest  = require('mysql-to-rest');
var app = express();

var connection = mysql.createPool({
  connectionLimit : 10,
  host            : process.env.IP,
  user            : process.env.C9_USER,
  database        : 'pdv',
  password        : ''
});

var api = mysqltorest(app,connection);
//Dont forget to start the server
console.log("init, port:"+process.env.PORT+" host:"+process.env.IP);
app.listen(process.env.PORT);

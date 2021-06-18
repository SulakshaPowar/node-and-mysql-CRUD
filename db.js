const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",   
    database: "Dashboard_login",
    password: "",
    multipleStatements: true
});
connection.connect(function(err){
    if(!err)
    console.log('connected to the mysql server');
    else
    console.error('error:'+err.message);    
});

module.exports = connection;
var mysql = require ("mysql");
// CREATE AUTHENTICATION METHODS
const connect = mysql.createConnection ({
  host: "",
  user : "",
  password : ""
});

// CONNECTION 
connect.connect (function (err) {
    if (err) throw error;
    console.log ("Successfuly");
});
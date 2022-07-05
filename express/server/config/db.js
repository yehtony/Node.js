const mysql = require("mysql2");

// connect MySQL
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yehtony292968",
    database: "side_project",
});

module.exports = connection;
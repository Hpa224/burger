let mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    con = mysql.createConnection(process.env.JAWSDB_URL);
} else { con =  mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
    })
    }


con.connect(function (ermac) {
    if (ermac) throw ermac;
        console.log(`connected as id ${con.threadid}`);
    })

    module.exports = con;
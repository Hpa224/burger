let con = require("../config/connection.js");

let orm = {
    select: function (table,cb) {
        console.log(table);
        con.query(`SELECT * FROM ${table}`, function(error, result) {
            if(error) throw error;
            cb(result)
            })
    },

    update: function(table, id, cb) {
        con.query(`UPDATE ${table} SET devoured=true WHERE id=${id};`, function(error, result){
            if(error)throw error;
            cb(result);
            })
    },

    create: function(table, value, cb) {
        con.query(`INSERT INTO ${table} (burger_name)VALUES (${val});`, function(error, result){
            if(error) throw error;
            cb(results);
            })
    }

}

module.exports = orm;

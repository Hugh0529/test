/**
 * Created by chy on 15-8-20.
 */
var mysql = require('mysql');
var async = require('async');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test9',
    port: 3306
});

function createConn(callback) {
    pool.getConnection(function(err, conn) {
        callback(err, conn);
    });
};

module.exports = createConn;
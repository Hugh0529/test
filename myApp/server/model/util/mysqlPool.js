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
//var toObject = (require("./toObject"))();

function createConn(callback) {
    async.waterfall([
       function(_callback) {
           pool.getConnection(function(err, conn) {
               callback(err, conn);
               _callback(err, conn);
           });
       }
    ],function(err, conn) {
        conn.release();
        if(err) {
            console.log(err);
        }
        //console.log('2.has released');
    });
};

module.exports = createConn;
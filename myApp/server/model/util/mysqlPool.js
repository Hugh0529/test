/**
 * Created by chy on 15-8-20.
 */
var mysql = require('mysql');
var async = require('async');
var mysqlConf = require('../../../configuration').mysql;
var pool = mysql.createPool({
    host: mysqlConf.host,
    user: mysqlConf.user,
    password: mysqlConf.password,
    database: mysqlConf.database,
    port: mysqlConf.port,
    connectionLimit: mysqlConf.connectionLimit,
    multipleStatements: mysqlConf.multipleStatements
});
// 以下在单独测试时候打开（已经在app.js里了）
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
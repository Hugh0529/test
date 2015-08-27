/**
 * Created by chy on 15-8-21.
 */
var async = require('async');
var poolConn = require("../model/util/mysqlPool");
var User = require("../model/User");
var testQuery = {};

testQuery.getUser = function (param, callback) {
    var sql = "select * from test9.user limit 10";
    async.waterfall([
        function(_callback) {
            poolConn(function(err, conn) {
                _callback(err, conn);
            });
        },
        function (conn, _callback) {
            conn.query(sql, function (err, res) {
                callback(res);
                _callback(err, res, conn);
            });
        }
    ], function(err, result, conn) {
        // do something
        //conn.release();
        //console.log('1.has released');
        if(err) {
            console.log(err);
        }
    });
};
module.exports = testQuery;
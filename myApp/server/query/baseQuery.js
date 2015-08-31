/**
 * Created by chy on 15-8-31.
 */
var async = require('async');
var poolConn = require("../model/util/mysqlPool");
var mysql = require('mysql');
var baseQuery = {};

baseQuery.find = function (param, callback) {
    var sql = "SELECT * FROM ?? WHERE ?? = ?";
    var inserts = [param.table, 'id', param.id];
    sql = mysql.format(sql, inserts);
    async.waterfall([
        function(_callback) {
            poolConn(function(err, conn) {
                _callback(err, conn);
            });
        },
        function (conn, _callback) {
            conn.query(sql, function (err, res) {
                var results = res.toObject(param.model);
                callback(results[0]);
                _callback(err, results, conn);
            });
        }
    ], function(err, result, conn) {
        if(err) {
            console.log(err);
        }
    });
};

module.exports = baseQuery;
/**
 * Created by chy on 15-8-30.
 */
var async = require('async');
var poolConn = require("../model/util/mysqlPool");
var baseQuery = require("./baseQuery");
var User = require("../model/User");

var userQuery = {};

userQuery.find = function (_id, callback) {
    var param = {
        id: _id,
        table: 'user',
        model: User
    };
    baseQuery.find(param, callback);
};

userQuery.findByUsername = function (user, callback) {
    async.waterfall([
        function(_callback) {
            poolConn(function(err, conn) {
                _callback(err, conn);
            });
        },
        function (conn, _callback) {
            //官方推荐，escape方法以防止sql注入
            var sql = "select * from test9.user u where u.username = " + conn.escape(user.username);
            conn.query(sql, function (err, res) {
                // 如果sql执行成功，没有结果的画，res为空的数组；如果sql执行失败，则res为undefined, 且返回err
                if(err) {
                    throw err;
                }
                var users = res.toObject(User);
                callback(users[0]);
                _callback(err, users, conn);
            });
        }
    ], function(err, result, conn) {
        // do something
        if(err) {
            console.log(err);
        }
    });
};
// 测试
//userQuery.findByUsername(null, function(){});
module.exports = userQuery;

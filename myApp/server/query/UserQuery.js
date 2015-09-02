/**
 * Created by chy on 15-8-30.
 */
var async = require('async');
//var poolConn = require("../model/util/mysqlPool");
var mysql = require('mysql');
var User = require("../model/User");
var BaseQuery = require("./BaseQuery");
var baseQuery = new BaseQuery();

var UserQuery = function (/*param, callback*/) {

};

var param = {
    table: 'user',
    model: User
};

UserQuery.prototype.find = function(conn, id, callback) {
    param.variable = id;
    baseQuery.find(conn, param, callback);
};

UserQuery.prototype.create = function(conn, user, callback) {
    param.variable = user;
    baseQuery.create(conn, param, callback);
};

UserQuery.prototype.update = function(conn, user, callback) {
    param.variable = user;
    baseQuery.create(conn, param, callback);
};

UserQuery.prototype.findByUsername = function (conn, username, callback) {
    async.waterfall([
        function (_callback) {
            //官方推荐，escape方法以防止sql注入
            var sql = "select * from test9.user u where u.username = " + mysql.escape(username);
            conn.query(sql, function (err, res) {
                // 如果sql执行成功，没有结果的话，res为空的数组；如果sql执行失败，则res为undefined, 且返回err
                if(err) {
                    throw err;
                }
                var users = res.toObject(User);
                callback(err, users[0]);
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

module.exports = UserQuery;

// 测试
//var userQuery = new UserQuery();
//var user = {
//    id: 5,
//    username: "test5@gmail.com",
//    name: "test5"
//};
//userQuery.find(1,function(){});
//userQuery.create(user, function(){});

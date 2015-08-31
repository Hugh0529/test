/**
 * Created by chy on 15-8-30.
 */
var async = require('async');
var poolConn = require("../model/util/mysqlPool");
var User = require("../model/User");
var BaseQuery = require("./BaseQuery");
var baseQuery = new BaseQuery();

var UserQuery = function (/*param, callback*/) {

};

var param = {
    table: 'user',
    model: User
};

UserQuery.prototype.find = function(id, callback) {
    param.variable = id;
    baseQuery.find(param, callback);
};

UserQuery.prototype.create = function(user, callback) {
    param.variable = user;
    baseQuery.create(param, callback);
};

UserQuery.prototype.update = function(user, callback) {
    param.variable = user;
    baseQuery.create(param, callback);
};

UserQuery.prototype.findByUsername = function (username, callback) {
    async.waterfall([
        function(_callback) {
            poolConn(function(err, conn) {
                _callback(err, conn);
            });
        },
        function (conn, _callback) {
            //官方推荐，escape方法以防止sql注入
            var sql = "select * from test9.user u where u.username = " + conn.escape(username);
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
//userQuery = new UserQuery();
//var user = {
//    id: 4,
//    username: "test4@gmail.com",
//    name: "test4"
//};
//userQuery.create(user, function(){});

module.exports = UserQuery;

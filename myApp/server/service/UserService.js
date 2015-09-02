/**
 * Created by chy on 15-8-29.
 */
var async = require('async');
var crypto = require('crypto'); // 生成散列值来加密
var md5 = crypto.createHash('md5');
var poolConn = require("../model/util/mysqlPool");
var queues = require('mysql-queues');

var UserQuery = require("../query/UserQuery");
var userQuery = new UserQuery();

var UserService = function(/*param, callback*/) {

};

UserService.prototype.create = function(user, callback) {
    async.waterfall([
        function(_callback) {
            poolConn(function(err, conn) {
                _callback(err, conn);
            });
        },
        function(conn, _callback) {
            queues(conn);
            var transaction = conn.startTransaction();
            transaction.execute();
            userQuery.create(transaction, user, function(err, user) {
                _callback(err, user, transaction);
                callback(err, user);
            });
        }
    ],function(err, user, transaction) {
        if(err) {
            transaction.rollback();
        }else {
            transaction.commit();
        }
    });
};

UserService.prototype.update = function(user, callback) {
    async.waterfall([
        function(_callback) {
            poolConn(function(err, conn) {
                _callback(err, conn);
            });
        },
        function(conn, _callback) {
            queues(conn);
            var transaction = conn.startTransaction();
            transaction.execute();
            userQuery.update(transaction, user, function(err, user) {
                _callback(err, user, transaction);
                callback(err, user);
            });
        }
    ],function(err, user, transaction) {
        if(err) {
            transaction.rollback();
        }else {
            transaction.commit();
        }
    });
};

UserService.prototype.login = function(req, callback) {
    async.waterfall([
        function(_callback) {
            poolConn(function(err, conn) {
                _callback(err, conn);
            });
        },
        function(conn, _callback) {
            userQuery.findByUsername(conn, req.body.username, function(err, user) {
                _callback(err, user);
            });
        },
        function(user, _callback) {
            var result;
            if(!user) {
                result = false;
            }else {
                //检查密码是否一致
                var password = md5.update(req.body.password).digest('hex'); // md5是否可以复用还是需要每次新声明还需验证
                if(password == user.password) {
                    result = true;
                }else {
                    result = false;
                }
            }
            callback(result, user);
            _callback(null, user);
        }
    ], function (err, result) {
        if(err) {
            console.log(err);
        }
    });
};

module.exports = UserService;

// 测试
//var userService = new UserService();
//var user = {
//    id: 8,
//    username: "test8@gmail.com",
//    name: "test8"
//};
//userService.create(user, function(){});
//userService.login(null, function(){});

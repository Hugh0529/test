/**
 * Created by chy on 15-8-29.
 */
var userQuery = require("../query/user?Query");
var async = require('async');
var crypto = require('crypto'); // 生成散列值来加密
var md5 = crypto.createHash('md5');
//var password = md5.update("123456").digest('hex');

var userService = {};

userService.login = function (req, callback) {
    async.waterfall([
        function(_callback) {
            userQuery.getUser(req.user.username, function(user) {
                _callback(null, user);
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
        // do something
        if(err) {
            console.log(err);
        }
    });
};

module.exports = userService;

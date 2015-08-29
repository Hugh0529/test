/**
 * Created by chy on 15-8-21.
 */
var testQuery = require("../query/testQuery");
var async = require('async');
var crypto = require('crypto'); // 生成散列值来加密
// example
//var md5 = crypto.createHash('md5'),;
//var password = md5.update("123456").digest('hex');

var testService = {};

testService.getUser = function (param, callback) {
    async.waterfall([
        function(_callback) {
            //console.log('start');
            testQuery.getUser(null, function(res) {
                //console.log('result --- ' + res[0].name + ' ' + res[1].name);
                _callback(null, res);
            });
        },
        function(res, _callback) {
            // do something
            callback(res);
            _callback(null, res);
        }
    ], function (err, result) {
        // do something
        if(err) {
            console.log(err);
        }
    });
};
// 测试
//testService.getUser(null, function(){});

module.exports = testService;
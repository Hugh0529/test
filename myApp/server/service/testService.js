/**
 * Created by chy on 15-8-21.
 */
var testQuery = require("../query/testQuery");
var async = require('async');
var testService = {};

testService.getUser = function (param, callback) {
    async.waterfall([
        function(_callback) {
            //console.log('start');
            testQuery.getUser(null, function(res) {
                //console.log('result --- ' + res);
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
testService.getUser(null, function(){});

module.exports = testService;
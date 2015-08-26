/**
 * Created by chy on 15-8-20.
 */
var express = require('express');
var router = express.Router();
var testService = require("../server/service/testService");
var async = require('async');

router.get('/test', function(req, res, next) {
    res.render('index', { title: 'test2' });
    async.waterfall([
        testService.getUser(null, function(res){
            // do something
             console.log('res: ' + res);
        })
    ], function() {

    });
});

module.exports = router;
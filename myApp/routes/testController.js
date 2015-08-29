/**
 * Created by chy on 15-8-20.
 */
var express = require('express');
var router = express.Router();
var testService = require("../server/service/testService");
var async = require('async');
var flash = require('connect-flash');

router.get('/test', function(req, res, next) {
    res.render('index', { title: 'test2' });
    async.waterfall([
        testService.getUser(null, function(res){
            // do something
            // console.log('res: ' + res);
            //req.flash('error', '用户不存在!');
        })
    ], function() {

    });
});

module.exports = router;
var express = require('express');
var router = express.Router();
var testService = require("../server/service/testService");
var async = require('async');
var flash = require('connect-flash');

/* GET home page. */
router.get('/', function(req, res, next) {
    var data = [
        { id:1, src:"/images/bot.jpg" },
        { id:2, src:"/images/bot.jpg" },
        { id:3, src:"/images/bot.jpg" },
        { id:4, src:"/images/bot.jpg" },
        { id:5, src:"/images/bot.jpg" },
        { id:6, src:"/images/bot.jpg" },
        { id:7, src:"/images/bot.jpg" },
        { id:8, src:"/images/bot.jpg" },
        { id:1, src:"/images/bot.jpg" },
        { id:2, src:"/images/bot.jpg" },
        { id:3, src:"/images/bot.jpg" },
        { id:4, src:"/images/bot.jpg" },
        { id:5, src:"/images/bot.jpg" },
        { id:6, src:"/images/bot.jpg" },
        { id:7, src:"/images/bot.jpg" },
        { id:8, src:"/images/bot.jpg" }
    ];
    res.render('index', { data:data });
});

router.get('/',function(req, res, next) {
    res.render('',{});
});

router.get('/',function(req, res, next) {
    res.render('',{});
});

router.get('/',function(req, res, next) {
    res.render('',{});
});

router.get('/',function(req, res, next) {
    res.render('',{});
});

module.exports = router;

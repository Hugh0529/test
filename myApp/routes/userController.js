/**
 * Created by chy on 15-8-29.
 */
var express = require('express');
var router = express.Router();
var async = require('async');

var UserService = require("../server/service/UserService");
var userService = new UserService();
//是否需要引入待测试
//var flash = require('connect-flash');

router.get('/login', function(req, res, next) {
    //res.render('index', { title: 'log in' });
    async.waterfall([
        userService.getUser(req, function(result, user) {
            // do something
            if(result) {
                //用户名密码都匹配后，将用户信息存入 session
                req.session.user = user;
                //res.render('xxx', { result: '登录成功！' });
                req.flash('result', '登录成功!');
                //登陆成功后跳转
                //res.redirect('/xxx');
            }else {
                req.flash('result', '用户名或密码错误!');
                //res.render('xxx', { result: '用户名或密码错误！' });
                //登陆失败后跳转
                //res.redirect('/xxx');
            }
        })
    ], function() {

    });
});

module.exports = router;

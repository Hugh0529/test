/**
 * Created by chy on 15-8-20.
 */
var express = require('express');
var router = express.Router();

router.get('/test2', function(req, res, next) {
    res.render('index', { title: 'test2' });
});

module.exports = router;
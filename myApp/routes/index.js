var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var data = [
        { id:1, src:"http://www.alachuawomansclub.com/wp-content/uploads/2014/07/r-WINE-TASTING-large570.jpg" },
        { id:2, src:"http://www.alachuawomansclub.com/wp-content/uploads/2014/07/r-WINE-TASTING-large570.jpg" },
        { id:3, src:"http://www.alachuawomansclub.com/wp-content/uploads/2014/07/r-WINE-TASTING-large570.jpg" },
        { id:4, src:"http://www.alachuawomansclub.com/wp-content/uploads/2014/07/r-WINE-TASTING-large570.jpg" },
        { id:5, src:"http://www.alachuawomansclub.com/wp-content/uploads/2014/07/r-WINE-TASTING-large570.jpg" },
        { id:6, src:"http://www.alachuawomansclub.com/wp-content/uploads/2014/07/r-WINE-TASTING-large570.jpg" },
        { id:7, src:"http://www.alachuawomansclub.com/wp-content/uploads/2014/07/r-WINE-TASTING-large570.jpg" },
        { id:8, src:"http://www.alachuawomansclub.com/wp-content/uploads/2014/07/r-WINE-TASTING-large570.jpg" }
    ];

    res.render('index', { data:data });

});

module.exports = router;

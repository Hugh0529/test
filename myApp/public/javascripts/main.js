/**
 * Created by Jonny on 15/8/19.
 */
$(document).ready(function() {
    reSize();

    $(window).resize(function(){
        reSize();
    });

    function reSize(){
        var w = $(window).width()/4;
        $('#main #content ul li').css({
            'width' : w,
            'height': w-10
        });
    };
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

    console.log(data);
});
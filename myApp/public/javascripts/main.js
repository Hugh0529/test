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
        $('#header,#header .headitem').css({'height':w});
        $('#main #content ul li,#main #content ul li img').css({
            'width' : w,
            'height': w-10
        });
        $('#main').css({'height':(w-10)*4});
        $('#main #content .index-vertical1,#main #content .index-vertical2,#main #content .index-vertical3').css({
            'height':(w-10)*4,
            'top':w});
    };
});
/**
 * Created by Jonny on 15/8/19.
 */
$(document).ready(function() {
    function resize(){
        var w = $(window).width()/4;
        $('#main #content ul li').css({
            'width' : w,
            'height': w-10
        });
    };

    resize();

    $(window).resize(function(){
        resize();
    });
});
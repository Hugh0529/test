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
});
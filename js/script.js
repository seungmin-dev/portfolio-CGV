$(document).ready(function () {
    $('.gnb').hover(function () {
        $(this).stop().animate({'top' : '0px'}, 500);
        $('.gnb-wrap').stop().animate({'margin-top' : '0px'}, 500);
    });
    $('.gnb').mouseleave(function () {
        $(this).stop().animate({'top' : '-171px'}, 500);
        $('.gnb-wrap').stop().animate({'margin-top' : '20px'}, 500);
    });
    
     var cnt;
    $('.top-menu ul').hover(function() {
        cnt = $(this).attr('data-val') - 1;
        $('.gnb-wrap nav li').eq(cnt).animate({'border-color': '#ffd168'}, 400); 
    });
    $('.top-menu ul').mouseout(function() {
        cnt = $(this).attr('data-val') - 1;
        $('.gnb-wrap nav li').eq(cnt).animate({'border-color':'transparent'}, 400); 
    });

});
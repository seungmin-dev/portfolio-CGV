$(document).ready(function () {
    
    var i, index, cnt,
        $gnb = $('.gnb'),
        $gnb_wrap = $('.gnb-wrap'),
        $gnbbg = $('.gnbbg');
    
    // menu
    
    $gnb.hover(function () {
        $(this).stop().animate({'top' : '0px'}, 500);
        $gnb_wrap.stop().animate({'margin-top' : '0px'}, 500);
        $gnbbg.show();
    });
    $gnb.mouseleave(function () {
        $(this).stop().animate({'top' : '-151px'}, 500);
        $gnb_wrap.stop().animate({'margin-top' : '20px'}, 500);
        $gnbbg.hide();
    });
    
    
    $('.top-menu ul').hover(function () {
        cnt = $(this).attr('data-val') - 1;
        $('.gnb-wrap nav li').eq(cnt).animate({'border-color': '#ffd168'}, 400);
    });
    $('.top-menu ul').mouseout(function () {
        cnt = $(this).attr('data-val') - 1;
        $('.gnb-wrap nav li').eq(cnt).animate({'border-color': 'transparent'}, 400);
    });
    
    
});


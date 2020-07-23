$(document).ready(function () {
    
    var i;
    
    // menu
    
    $('.gnb').hover(function () {
        $(this).stop().animate({'top' : '0px'}, 500);
        $('.gnb-wrap').stop().animate({'margin-top' : '0px'}, 500);
    });
    $('.gnb').mouseleave(function () {
        $(this).stop().animate({'top' : '-171px'}, 500);
        $('.gnb-wrap').stop().animate({'margin-top' : '20px'}, 500);
    });
    
     var cnt;
    $('.top-menu ul').hover(function () {
        cnt = $(this).attr('data-val') - 1;
        $('.gnb-wrap nav li').eq(cnt).animate({'border-color': '#ffd168'}, 400);
    });
    $('.top-menu ul').mouseout(function () {
        cnt = $(this).attr('data-val') - 1;
        $('.gnb-wrap nav li').eq(cnt).animate({'border-color': 'transparent'}, 400);
    });

    //tap
    
    $('.tap li').click(function () {
        $('.moviechart').hide();
        var index = $(this).index();
        $('.moviechart').eq(index).show();
        $('.tap li').removeClass('active');
        $(this).addClass('active');
    })
    
    // movie-wrap
    
    $('.leftbtn').click(function () {
        var i = 0;
        if(i = 0) {
            $('.movie-wrap').animate({'margin-left' : '-100%'}, 500);
            $(this).hide();
            i = 1;
        } else {
            $('.movie-wrap').animate({'margin-left' : '0'}, 500);
            $('.rightbtn').show();
            $(this).hide();
            i = 0;
        }
    });
    $('.rightbtn').click(function () {
        var a = 0;
        if(a = 0) {
            $('.movie-wrap').animate({'margin-left' : '0'}, 500);
            $('.leftbtn').show();
            a = 1;
        } else {
            $('.movie-wrap').animate({'margin-left' : '-100%'}, 500);
            $(this).hide();
            $('.leftbtn').show();
            i = 0;
        }
    });
    
    // poster

    
    for (i = 1; i <= 8; i++) {
        $('.poster').eq(i - 1).find('img').attr('src', 'src/movie' + i + '.jpg');
    }
    
    $('.movie').mouseenter(function () {
        $(this).find('.detail').stop().animate({'top' : '0px'}, 400);
    });
    $('.movie').mouseleave(function () {
        $(this).find('.detail').stop().animate({'top' : '100%'}, 400);
    });
    
    
});
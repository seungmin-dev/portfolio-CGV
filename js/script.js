$(document).ready(function () {
    
    var i, index, cnt,
        $gnb = $('.gnb'),
        $gnb_wrap = $('.gnb-wrap'),
        $gnbbg = $('.gnbbg'),
        nextVideo = ["./src/bando.webm", "./src/aladin.webm", "./src/bombshell.webm"],
        count = 0,
        count_3,
        videoPlayer = document.getElementById('myVideo'),
        $page3_offsetTop = $("#page3").offset().top,
        $page2_offsetTop = $("#page2").offset().top,
        $page1_offsetTop = $('#page1').offset().top,
        $event = $('.event'),
        win_w = $(window).width(),
        win_h = $(window).height();
    
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
    
    
    
    // video
    
   
    videoPlayer.onended = function () {
        count++;
        count_3 = count % 3;
        videoPlayer.src = nextVideo[count_3];
    };

    //poster-slide
    
    for (i = 8; i >= 1; i--) {
        $('.poster-slide').eq(8 - i).css('background-image', 'url("./src/movie' + i + '.jpg")');
    }
    
    
    function bigPoster() {
        $('.poster-slide').eq(7).addClass('active');
        $('.poster-slide').eq(0).removeClass('active');
    }
    function slidePoster() {
        $('.poster-slide').eq(7).fadeOut(1000);
        $('.poster-slide').eq(6).fadeIn(400);
        $('.poster-slide').eq(7).delay(400).prependTo('.poster-slide-wrap');
    }
    
    var intv = setInterval(function () { bigPoster(); }, 1000),
        intv2 = setInterval(function () { slidePoster(); }, 4000);
    
    
    //tap
    
    $('.tap li').click(function () {
        /*$('.moviechart').hide();*/
        $('.moviechart').removeClass('active');
        var index = $(this).index();
        /*$('.moviechart').eq(index).show();*/
        $('.moviechart').eq(index).addClass('active');
        $('.tap li').removeClass('active');
        $(this).addClass('active');
        $('.movie-wrap').animate({'margin-left' : '0'}, 500);
        $('.leftbtn').hide();
        $('.rightbtn').show();
    });
    
    // movie-wrap
    
    $('.leftbtn').click(function () {
        $('.moviechart.active').find('.movie-wrap').animate({'margin-left' : '0'}, 500);
        $(this).hide();
        $('.rightbtn').show();
    });
    $('.rightbtn').click(function () {
        $('.moviechart.active').find('.movie-wrap').animate({'margin-left' : '-100%'}, 500);
        $('.leftbtn').show();
        $(this).hide();
    });
    
    // poster

    
    for (i = 1; i <= 8; i++) {
        $('.poster').eq(i - 1).find('img').attr('src', 'src/movie' + i + '.jpg');
        $('.arthouse').eq(i - 1).find('img').attr('src', 'src/arthouse' + i + '.jpg');
        $('.scheduled').eq(i - 1).find('img').attr('src', 'src/scheduled' + i + '.jpg');
    }
    
    $('.movie').mouseenter(function () {
        $(this).find('.detail').stop().animate({'top' : '0px'}, 400);
    });
    $('.movie').mouseleave(function () {
        $(this).find('.detail').stop().animate({'top' : '100%'}, 400);
    });
    
    
    // snack
    
    if (768 <= win_h <= 991) {
        $('.snack').css('opacity', '1');
    } else {
        $(window).off("mousewheel DOMMousewheel");
        $(window).scroll(function () {
            var pos = $(window).scrollTop();
            if (pos >= $page3_offsetTop - 1) {
                var snack_leng = $('.snack').length,
                    $snack = $(".snack");
                for (i = 0; i < snack_leng; i++) {
                    $snack.eq(0).stop().animate({opacity: "1"}, 200);
                    $snack.eq(i).stop().delay(i * 100).animate({opacity: "1"}, 300);
                }
            }
        });
    }
    
    // snack btn
    
    $('.snack-btn-box .left').click(function () {
        $('.snack-wrap').animate({'margin-left': '0'}, 300);
        $(this).hide();
        $('.snack-btn-box .right').show();
    });
    $('.snack-btn-box .right').click(function () {
        $('.snack-wrap').animate({'margin-left': '-25%'}, 300);
        $(this).hide();
        $('.snack-btn-box .left').show();
    });
    
    // event img
    
    
    for (i = 0; i <= 4; i++) {
        $('.event-box').eq(i).find('a').css('background-image', 'url("./src/event' + i + '.jpg")');
    }
    
    
    // top btn
    
    $('.topbtn').click(function () {
        $("body, html").stop().animate({
            scrollTop: 0
        });
    });
    
    
    $(window).scroll(function () {
        var pos = $(window).scrollTop(),
            win_h2 = win_h * 2 + 150;
        
        if (pos === 0) {
            $('.topbtn').stop().animate({'opacity' : '0'}, 500);
            $('.topbtn').css('bottom', '10%');
        } else if (pos > win_h2) {
            $('.topbtn').stop().animate({'bottom' : '25%'}, 500);
        } else {
            $('.topbtn').stop().animate({'opacity' : '1'}, 300);
            $('.topbtn').css('bottom', '10%');
        }
        
    });
    
    if (win_w <= 600) {
        $(window).scroll(function () {
            var pos = $(window).scrollTop(),
                win_h2 = win_h * 2 + 150;
            
            if (pos > win_h2) {
                $('.topbtn').stop().animate({'bottom' : '29%'}, 500);
            }
        });
     } else {}
    
    
});
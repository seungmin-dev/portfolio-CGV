$(document).ready(function () {
    
    var i, index;
    
    // menu
    
    $('.gnb').hover(function () {
        $(this).stop().animate({'top' : '0px'}, 500);
        $('.gnb-wrap').stop().animate({'margin-top' : '0px'}, 500);
        $('.gnbbg').show();
    });
    $('.gnb').mouseleave(function () {
        $(this).stop().animate({'top' : '-151px'}, 500);
        $('.gnb-wrap').stop().animate({'margin-top' : '20px'}, 500);
        $('.gnbbg').hide();
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
    
    
    
    // video
    
   var nextVideo = ["./src/bando.webm", "./src/aladin.webm", "./src/bombshell.webm"];
    var count = 0,
        count_3;
    var videoPlayer = document.getElementById('myVideo');
    videoPlayer.onended = function(){
        count++;
        count_3 = count % 3;
        videoPlayer.src = nextVideo[count_3];
    }



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
            $('.moviechart.active').find('.movie-wrap').animate({'margin-left' : '0'}, 500);
            $('.leftbtn').show();
            a = 1;
        } else {
            $('.moviechart.active').find('.movie-wrap').animate({'margin-left' : '-100%'}, 500);
            $(this).hide();
            $('.leftbtn').show();
            i = 0;
        }
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
    
    var $page3_offsetTop = $("#page3").offset().top,
        $page2_offsetTop = $("#page2").offset().top;

    $(window).off("mousewheel DOMMousewheel");
    $(window).scroll(function () {
        var pos = $(window).scrollTop()
        if (pos > $page3_offsetTop) {
            var snack_leng = $('.snack').length,
                $snack = $(".snack");
            for (var i = 0; i < snack_leng; i++) {
                $snack.eq(0).stop().animate({opacity: "1"}, 200);
                $snack.eq(i).stop().delay(i * 100).animate({opacity: "1"}, 300);
            }
        } 
    });
});
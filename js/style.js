$(document).ready(function(){
    $('.sub_nav_wrap').hide();
    $( ".header_wrap_on" ).hide();

    $('.header_wrap').mouseenter(function(){
        $(this).hide();
        $('.sub_nav_wrap').hide();
        $('.header_wrap_on').slideDown( 200 )
    });
    $('.header_wrap_on').mouseleave(function(){
        $(this).hide();
        if($('.sub_nav_wrap').show()){
            $('.header_wrap_on').show();
            $('.sub_nav_wrap').hide();
        }
        else{
            $('.header_wrap').show();
        }
    });
     $( window ).scroll(function() {
        $('.sub_nav_wrap').hide();
        $( ".header_wrap" ).hide();
        $( ".header_wrap_on" ).stop().slideDown(1)
        if($(window).scrollTop() == 0){ 
            $('.sub_nav_wrap').hide();
            $( ".header_wrap_on" ).hide();
            $('.header_wrap').show();
            $('.header_wrap').mouseenter(function(){
                $(this).hide();
                $('.sub_nav_wrap').hide();
                $('.header_wrap_on').slideDown( 200 )
            });
            $('.header_wrap_on').mouseleave(function(){
                $(this).hide();
                if($('.sub_nav_wrap').show()){
                    $('.header_wrap').show();
                    $('.sub_nav_wrap_on').hide();
                }
                else{
                    $('.header_wrap').show();
                }
            });
        }
        else{
            $('.header_wrap').mouseenter(function(){
                $(this).hide();
                $('.sub_nav_wrap').hide();
                $('.header_wrap_on').slideDown( 200 )
            });
            $('.header_wrap_on').mouseleave(function(){
                $(this).hide();
                if($('.sub_nav_wrap').show()){
                    $('.header_wrap_on').show();
                    $('.sub_nav_wrap').hide();
                }
                else{
                    $('.header_wrap').show();
                }
            });
        }
    });
    /*
    $('#wrap').click(function(){
        $('.header_wrap_on').hide();
        $('.header_wrap').show()
    });
    메뉴 온오프 */
    $('.header_wrap_on .nav_wrap ul li a').mouseenter(function(){
        $('.sub_nav_wrap').slideDown( 200 ).stop();
    });
    $('.sub_nav_wrap').mouseleave(function(){
        if($('.sub_nav_wrap').show()){
            $('.sub_nav_wrap').slideUp( 200 ).stop();
        }
    });
    /* suv nav */
    $('.header_wrap_on li a').mouseenter(function(){
        $(this).addClass('on')
    })
    $('.header_wrap_on li a').mouseleave(function(){
        $(this).removeClass('on')
    })
    $('.nav1_on').mouseenter(function(){
        $('.header_wrap_on li:first-child a').addClass('on')
        $('.nav1_on').mouseleave(function(){
            $('.header_wrap_on li:first-child a').removeClass('on')
        })
    })
    $('.nav2_on').mouseenter(function(){
        $('.header_wrap_on li:nth-child(2) a').addClass('on')
        $('.nav2_on').mouseleave(function(){
            $('.header_wrap_on li:nth-child(2) a').removeClass('on')
        })
    })
    $('.nav3_on').mouseenter(function(){
        $('.header_wrap_on li:nth-child(3) a').addClass('on')
        $('.nav3_on').mouseleave(function(){
            $('.header_wrap_on li:nth-child(3) a').removeClass('on')
        })
    })
    /* 메인상단 슬라이드 */
    var cnt = 1
    function timer_sub(){
        setInterval(function() { 
            cnt++
            if(cnt == 4){
                cnt=1;
            }
            $('.slide_info_box_img').attr('src','images/main/img_top_slide_info_' + cnt + '.png');
            $('.slide_count_btn li:nth-child(2)').text(cnt + '\u00A0' + '/ 3');
            $('.slide_img_box_img').attr('src','images/main/img_slider' + cnt + '.png');
        }, 5000);
    }
    function next(){
        $('.slide_count_btn li:last-child').click(function(){
            cnt++
            if(cnt == 4){
                cnt=1;
            }
            $('.slide_info_box_img').attr('src','images/main/img_top_slide_info_' + cnt + '.png')
            $('.slide_count_btn li:nth-child(2)').text(cnt + '\u00A0' + '/ 3')
            $('.slide_img_box_img').attr('src','images/main/img_slider' + cnt + '.png')
        })
    }
    function prev(){
        $('.slide_count_btn li:first-child').click(function(){
            cnt--
            if(cnt == 0){
                cnt=3;
            }
            $('.slide_info_box_img').attr('src','images/main/img_top_slide_info_' + cnt + '.png')
            $('.slide_count_btn li:nth-child(2)').text(cnt + '\u00A0' + '/ 3')
            $('.slide_img_box_img').attr('src','images/main/img_slider' + cnt + '.png')
        })
    }
    timer_sub();
    next()
    prev()


    $("dt").css("background-image","url('images/main/img_dt_off.png')").css('background-repeat','no-repeat').css('background-position',' right 50px top 60px');
    $("dt").click(function(){
        if($("+dd",this).css("display")=="none"){
            $("dt").css("background-image","url('images/main/img_dt_off.png')").css('background-repeat','no-repeat').css('background-position',' right 50px top 60px');
            $("dd").slideUp("fast");
            $("+dd",this).slideDown("fast");
            $(this).css('background-color','#fdfdfd');
            $(this).css("background-image","url('images/main/img_dt_on.png')").css('background-repeat','no-repeat').css('background-position',' right 50px top 60px');
        }
        else{
            $("dd").slideUp("fast");
            $(this).css('background-color','white');
            $(this).css("background-image","url('images/main/img_dt_off.png')").css('background-repeat','no-repeat').css('background-position',' right 50px top 60px');
        }
    });
    $("dt").mouseenter(function(){
        $("h3",this).css('color','#006eb7');
        $(this).css('background-color','#fdfdfd');
    });
    $("dt").mouseleave(function(){
        $("h3").css('color','black');
        $("dt").css('background-color','white');

    });
    /*
    ad_cnt = 1;
    $('.btn_adslide_prev').click(function(){
        ad_cnt--;
        $('#slide_img').attr('src','images/main/img_ad_slide' + ad_cnt + '.png')
        if(ad_cnt == 0){
            ad_cnt =1
        }
    })

    $('.btn_adslide_next').click(function(){
        $('#slide_img').attr('src','images/main/img_ad_slide' + ad_cnt + '.png')
    })*/
    // 기존 css에서 플로팅 배너 위치(top)값을 가져와 저장한다.
	var floatPosition = parseInt($("#floatMenu").css('top'));
	// 250px 이런식으로 가져오므로 여기서 숫자만 가져온다. parseInt( 값 );

	$(window).scroll(function() {
		// 현재 스크롤 위치를 가져온다.
		var scrollTop = $(window).scrollTop();
		var newPosition = scrollTop + floatPosition + "px";

		/* 애니메이션 없이 바로 따라감 */
		 $("#floatMenu").css('top', newPosition);

    }).scroll();
    $('.scr1').mouseenter(function(){
        $('.scr1').stop().css('border-radius','80px').animate({width:"210px"},250)
        $('.scr1 span').show()
        $('.scr2').css('float','right')
    })
    $('.scr1').mouseleave(function(){
        $('.scr1').stop().css('border-radius','80px').animate({width:"95px"},250)
        $('.scr1 span').hide()
        $('.scr2').css('clear','both')
    })
    
    $('.scr2').mouseenter(function(){
        $('.scr1').css('float','right')
        $('.scr2').stop().css('clear','both').css('float','right').css('border-radius','80px').animate({width:"210px"},250)
        $('.scr2 span').show()
        $('.scr2 p').hide()
        
    })
    $('.scr2').mouseleave(function(){
        $('.scr2').stop().css('border-radius','80px').animate({width:"95px"},250)
        $('.scr2 span').hide()
        $('.scr2 p').show()
        $('.scr1').css('clear','both')
    })
})



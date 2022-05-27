$(document).ready(function(){
    $('.sub_nav_wrap').hide();

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
   
    $('.header_wrap_on .nav_wrap ul li a').mouseenter(function(){
        $('.sub_nav_wrap').slideDown( 200 ).css('height','').stop();
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

    $('.sub_tab_menu li').click(function(){
        var tab_id = $(this).attr('data-id');

        $('.sub_tab_menu li').removeClass('on');
        $('.tab_content').removeClass('current');
     
        $(this).addClass('on');
        $("#"+tab_id).addClass('current');
      })

      $('.sub_partner_tab_menu li').click(function(){
        var tab_id = $(this).attr('data-id');

        $('.sub_partner_tab_menu li').removeClass('on');
        $('.tab_content').removeClass('current');
     
        $(this).addClass('on');
        $("#"+tab_id).addClass('current');
      })
    /* sub_tabmenu*/
    var floatPosition = parseInt($("#floatMenu").css('top'));
	// 250px 이런식으로 가져오므로 여기서 숫자만 가져온다. parseInt( 값 );

	$(window).scroll(function() {
		// 현재 스크롤 위치를 가져온다.
		var scrollTop = $(window).scrollTop();
		var newPosition = scrollTop + floatPosition + "px";

		/* 애니메이션 없이 바로 따라감*/
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
    $('.marketing').mouseenter(function(){
        $(this).addClass('on')
    });
    $('.marketing').mouseleave(function(){
        $(this).removeClass('on')
    })
   
    $('.cont1').click(function(){
        $('.pop_cont').hide()
        $('.pop_cont1').show()
        $('body').css('overflow','hidden')
        $('#popup').stop().show().animate({
            'top':'150px','height':'100%'
        },500)
        $('.pop_close').click(function(){
            $('body').css('overflow','')
            $('#popup').stop().animate({
                'top':'100%'
            },500)
        });
    })
    $('.cont2').click(function(){
        $('.pop_cont').hide()
        $('.pop_cont2').show()
        $('body').css('overflow','hidden')
        $('#popup').stop().show().animate({
            'top':'150px','height':'100%'
        },500)
        $('.pop_close').click(function(){
            $('body').css('overflow','')
            $('#popup').stop().animate({
                'top':'100%'
            },500)
        });
    })
    $('.cont3').click(function(){
        $('.pop_cont').hide()
        $('.pop_cont3').show()
        $('body').css('overflow','hidden')
        $('#popup').stop().show().animate({
            'top':'150px','height':'100%'
        },500)
        $('.pop_close').click(function(){
            $('body').css('overflow','')
            $('#popup').stop().animate({
                'top':'100%'
            },500)
        });
    })
    $('.cont4').click(function(){
        $('.pop_cont').hide()
        $('.pop_cont4').show()
        $('body').css('overflow','hidden')
        $('#popup').stop().show().animate({
            'top':'150px','height':'100%'
        },500)
        $('.pop_close').click(function(){
            $('body').css('overflow','')
            $('#popup').stop().animate({
                'top':'100%'
            },500)
        });
    })
    $('.cont5').click(function(){
        $('.pop_cont').hide()
        $('.pop_cont5').show()
        $('body').css('overflow','hidden')
        $('#popup').stop().show().animate({
            'top':'150px','height':'100%'
        },500)
        $('.pop_close').click(function(){
            $('body').css('overflow','')
            $('#popup').stop().animate({
                'top':'100%'
            },500)
        });
    })
    $('.cont6').click(function(){
        $('.pop_cont').hide()
        $('.pop_cont6').show()
        $('body').css('overflow','hidden')
        $('#popup').stop().show().animate({
            'top':'150px','height':'100%'
        },500)
        $('.pop_close').click(function(){
            $('body').css('overflow','')
            $('#popup').stop().animate({
                'top':'100%'
            },500)
        });
    })
    $('.cont7').click(function(){
        $('.pop_cont').hide()
        $('.pop_cont7').show()
        $('body').css('overflow','hidden')
        $('#popup').stop().show().animate({
            'top':'150px','height':'100%'
        },500)
        $('.pop_close').click(function(){
            $('body').css('overflow','')
            $('#popup').stop().animate({
                'top':'100%'
            },500)
        });
    })
    $('.cont8').click(function(){
        $('.pop_cont').hide()
        $('.pop_cont8').show()
        $('body').css('overflow','hidden')
        $('#popup').stop().show().animate({
            'top':'150px','height':'100%'
        },500)
        $('.pop_close').click(function(){
            $('body').css('overflow','')
            $('#popup').stop().animate({
                'top':'100%'
            },500)
        });
    })
    $('.cont9').click(function(){
        $('.pop_cont').hide()
        $('.pop_cont9').show()
        $('body').css('overflow','hidden')
        $('#popup').stop().show().animate({
            'top':'150px','height':'100%'
        },500)
        $('.pop_close').click(function(){
            $('body').css('overflow','')
            $('#popup').stop().animate({
                'top':'100%'
            },500)
        });
    })
    $('.cont10').click(function(){
        $('.pop_cont').hide()
        $('.pop_cont10').show()
        $('body').css('overflow','hidden')
        $('#popup').stop().show().animate({
            'top':'150px','height':'100%'
        },500)
        $('.pop_close').click(function(){
            $('body').css('overflow','')
            $('#popup').stop().animate({
                'top':'100%'
            },500)
        });
    })
    $('.cont11').click(function(){
        $('.pop_cont').hide()
        $('.pop_cont11').show()
        $('body').css('overflow','hidden')
        $('#popup').stop().show().animate({
            'top':'150px','height':'100%'
        },500)
        $('.pop_close').click(function(){
            $('body').css('overflow','')
            $('#popup').stop().animate({
                'top':'100%'
            },500)
        });
    })
    $('.cont12').click(function(){
        $('.pop_cont').hide()
        $('.pop_cont12').show()
        $('body').css('overflow','hidden')
        $('#popup').stop().show().animate({
            'top':'150px','height':'100%'
        },500)
        $('.pop_close').click(function(){
            $('body').css('overflow','')
            $('#popup').stop().animate({
                'top':'100%'
            },500)
        });
    })
    $('.cont13').click(function(){
        $('.pop_cont').hide()
        $('.pop_cont13').show()
        $('body').css('overflow','hidden')
        $('#popup').stop().show().animate({
            'top':'150px','height':'100%'
        },500)
        $('.pop_close').click(function(){
            $('body').css('overflow','')
            $('#popup').stop().animate({
                'top':'100%'
            },500)
        });
    })
    $('.cont14').click(function(){
        $('.pop_cont').hide()
        $('.pop_cont14').show()
        $('body').css('overflow','hidden')
        $('#popup').stop().show().animate({
            'top':'150px','height':'100%'
        },500)
        $('.pop_close').click(function(){
            $('body').css('overflow','')
            $('#popup').stop().animate({
                'top':'100%'
            },500)
        });
    })
    $('.cont15').click(function(){
        $('.pop_cont').hide()
        $('.pop_cont15').show()
        $('body').css('overflow','hidden')
        $('#popup').stop().show().animate({
            'top':'150px','height':'100%'
        },500)
        $('.pop_close').click(function(){
            $('body').css('overflow','')
            $('#popup').stop().animate({
                'top':'100%'
            },500)
        });
    })
    $('.cont16').click(function(){
        $('.pop_cont').hide()
        $('.pop_cont16').show()
        $('body').css('overflow','hidden')
        $('#popup').stop().show().animate({
            'top':'150px','height':'100%'
        },500)
        $('.pop_close').click(function(){
            $('body').css('overflow','')
            $('#popup').stop().animate({
                'top':'100%'
            },500)
        });
    })
    $('.cont17').click(function(){
        $('.pop_cont').hide()
        $('.pop_cont17').show()
        $('body').css('overflow','hidden')
        $('#popup').stop().show().animate({
            'top':'150px','height':'100%'
        },500)
        $('.pop_close').click(function(){
            $('body').css('overflow','')
            $('#popup').stop().animate({
                'top':'100%'
            },500)
        });
    })
})



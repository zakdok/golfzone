$(document).ready(function(){
    $( window ).scroll(function() {
        $('.top_menu_defult').hide();
        $( ".top_menu_scroll" ).show();
        if($(window).scrollTop() == 0){ 
            $('.top_menu_defult').show();
            $('.top_menu_scroll').hide();
        }
    });
    $('.top_menu_on').click(function(){
        $('.top_menu_on_wrap').show()
    })
    $('.top_menu_close').click(function(){
        $('.top_menu_on_wrap').hide();
    })

    $('.top_menu_on_nav ul li').click(function(){
        $('.top_menu_on_nav ul li').removeClass('on')
        $('.top_menu_on_nav ul li ul').hide()
        $(this).addClass('on')
        $(this).children().show()
    })
    $("dt").css("background-image","url('images/main/img_dt_off.png')").css('background-repeat','no-repeat').css('background-position',' right 1rem top 50%');
    $("dt").click(function(){
        if($("+dd",this).css("display")=="none"){
            $("dt").css("background-image","url('images/main/img_dt_off.png')").css('background-repeat','no-repeat').css('background-position',' right 1rem top 50%');
            $("dd").slideUp("fast");
            $("+dd",this).slideDown("fast");
            $(this).css('background-color','#fdfdfd');
            $(this).css("background-image","url('images/main/img_dt_on.png')").css('background-repeat','no-repeat').css('background-position',' right 1rem top 50%');
        }
        else{
            $("dd").slideUp("fast");
            $(this).css('background-color','white');
            $(this).css("background-image","url('images/main/img_dt_off.png')").css('background-repeat','no-repeat').css('background-position',' right 1rem top 50%');
        }
    });
    var floatPosition = parseInt($("#floatMenu").css('top'));
	// 250px 이런식으로 가져오므로 여기서 숫자만 가져온다. parseInt( 값 );
	$(window).scroll(function() {
		// 현재 스크롤 위치를 가져온다.
		var scrollTop = $(window).scrollTop();
		var newPosition = scrollTop + floatPosition + "px";
		/* 애니메이션 없이 바로 따라감 */
		 $("#floatMenu").css('top', newPosition);
		$("#floatMenu").stop().animate({
			"top" : newPosition
		}, 500);
    }).scroll();

    var i = $('.sub_tab_wrap ul li.on').clone()

    $('.sub_tab_wrap ul li.on').click(function(){
        $('.sub_tab_wrap ul li.on').css('border-bottom','2px solid #0084dc')
        if($('.sub_tab_wrap ul div').css('display')=='none'){
            $('.sub_tab_wrap ul div').slideDown("fast");
        }
        else{
            $('.sub_tab_wrap ul div').slideUp("fast");
            $('.sub_tab_wrap ul li.on').css('border-bottom','none')
        }
    })
    
})
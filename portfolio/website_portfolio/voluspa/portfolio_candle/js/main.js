$(function(){    
    
    var win_w = $(window).width();
    var pos = [];
    var base_line = -400;
    
    $(window).on('resize', function(){
        win_w = $(this).width();
        if(win_w>980){ 
            $('.submenu').removeAttr('style'); 
            $('#visual>.box').removeAttr('style'); 
            $('.submenu').hide();
            setTimeout(function(){  $('.submenu').removeAttr('style');    }, 100);
            
        } else if(win_w>768){
            $('#best .menu_box').removeAttr('style');
        }
      
    });
    
    

        pos = [];
        $('section').each(function(){
            pos.push( $(this).offset().top );
        });
        pos.push( $('section').last().offset().top + $('section').last().height() );
        pos[0] = 0;
  
    
    
    $(window).on('scroll', function(){
      if(win_w > 980){
          // 4-2-1 스크롤 값 구하기
          var scroll = $(this).scrollTop(); // 현재 스크롤 값을 구해서
          // 4-2-2 반복돌면서 어떤 영역 있는지 체크
          $('section').each(function(i){
              if(scroll>= pos[i] + base_line &&  scroll< pos[i+1]){ 
                  // 해당영역과 일치하는 섹션/페이지버튼/gnb메뉴에 on클래스 추가 나머지 제거
                  $('section').removeClass('on').eq(i).addClass('on');
              }
          });
      }else{
        $('section').addClass('on');
      }
      
    });
    
    
    
     $('.toggle').on('click', function(){
         $('.gnb_wrap').toggleClass('on');
         $('#visual>.box').toggle();
          });
    
   
     $('#gnb>li').on('mouseenter', function(){
         if(win_w>980){ 
             
             $(this).addClass('on');            
         }else{  
             $('#gnb>li>a').off('click'); 
           
             $('#gnb>li>a').on('click', function(){ 
                 $('.submenu').stop().slideUp(); 
                 $(this).next('.submenu').stop().slideToggle(); 
             });     
         }
     });
     
     $('#gnb>li').on('mouseleave', function(){
         if(win_w>980){
            
            $(this).removeClass('on');            
         }
     });
    



    var swiper = new Swiper('#visual .swiper-container', {
        loop: true,
        speed: 300,
        effect: 'fade',
        speed: 800,
    
        
    pagination: {
        el: '#visual .swiper-pagination',
    },
        navigation: {
            nextEl: '#visual .swiper-button-next', 
            prevEl: '#visual .swiper-button-prev', 
        },
    });


 $('.menu_box').on('click',function(e){
        e.preventDefault();
       
        var i = $(this).parent().index(); // 몇번째 것이냐? - 0부터 세줌
        
        $('.tab .pannel').fadeOut().eq(i).fadeIn();
        if(win_w>980){
        $('.menu').removeClass('on').eq(i).addClass('on');
        
        }else if(win_w<769){
            $('.filter').off('click'); 
             $('.menu_box').stop().fadeOut(); 
            
            $('.filter').on('click', function(e){ 
                 e.preventDefault();
                 $('.menu_box').stop().fadeOut(); 
                 $('.menu_box').stop().fadeToggle(); 
                $('#best .inner').toggleClass('on');
             }); 
            $('.menu_box').on('click',function(){
                $('#best .inner').removeClass('on');
            });
            
              
            
        }
    });
    $('.menu_box1').trigger('click');
    
           
            
        
        
  

    
    
    
    
        $('#choose .txt').off('click'); 
        $('.subtxt').off('click');

       $('.subtitle').on('click', function(e){
        e.preventDefault();
        
        $('#choose .txt').stop().slideUp(); 
        $('.subtitle').removeClass('on');
        $(this).next('#choose .txt').stop(true,true).slideToggle();
        $(this).stop(true,true).toggleClass('on');
            
         });
        
        
        
    
         $('.subtitle1').trigger('click');

        

         var swiper = new Swiper('#review .swiper-container', {
            loop: true,
            speed: 300,
            effect: 'fade',
            speed: 500,
              autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                  },
        
            
        pagination: {
            el: '#review .swiper-pagination',
        },
            navigation: {
                nextEl: '#review .swiper-button-next', 
                prevEl: '#review .swiper-button-prev', 
            },
        });








});   
$(function(){
  let win_w = $(window).width();
  let pos = []; 
  let lastPos = [];
  let base_line = -500;
  let scrollTop ;

  if(win_w < 1024) {
    base_line = - 200;
  }

  $('.gnb_open').on({
    click: function(){
      $('aside > nav').stop().slideToggle();
    }
  });

  $('#gnb li').on({
    click: function(){
      let gnbIdx = $(this).index();
      $('#gnb li').removeClass('gnb_on');
      $(this).addClass('gnb_on');

      if(win_w < 1024){
        $('aside > nav').slideUp();
      }
    }
  });
  
  $(window).on({
    resize: function(){
      win_w = $(this).width();
      if(win_w < 1024){
        base_line = - 200;
        $('aside > nav').hide();
      }else{
        base_line = -500;
        $('aside > nav').show();
      }
    }
  });

  $('.web_project').slick({
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="xi-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="xi-angle-right"></i></button>',
    appendArrows: $('.slick_btn')
  });

  $('#skill .tab_title li').on({
    click: function (){
      let tabIdx = $(this).index();
      let btn = $(this).children('button');
      let siblingsBtn = btn.parent('li').siblings().children('button');

      siblingsBtn.removeClass('menu_on');
      btn.addClass('menu_on')

      $('.tab_content li').removeClass('open');
      $('.tab_content li').eq(tabIdx).addClass('open');
    }
  });

  $('section:not("#web_ui")').each(function(i){
    pos.push( $(this).offset().top );
  });
  pos.push( $('#practical').last().offset().top + $('#practical').last().height() );
  pos[0] = 0;
  
  lastPos[0] = $('section').last().offset().top + $('section').last().height() - $(window).height();
  lastPos[1] = $('section').last().offset().top +$('section').last().height() ;

  $(window).on({
    scroll: function(){
      scrollTop = $(this).scrollTop();
      $('section').each(function(i){
        
        if(scrollTop > pos[i]+ base_line){
          $('#gnb li').removeClass('gnb_on').eq(i).addClass('gnb_on');

          $('section').removeClass('content_on');
          $('section').eq(i).addClass('content_on');
        }

        if(scrollTop >= lastPos[0]){
          $('#gnb li').removeClass('gnb_on').eq(i).addClass('gnb_on');
          $('#web_ui').addClass('content_on');
        }else {
          $('#web_ui').removeClass('content_on');
        }
        
      });

    }
  });

  $('section').each(function(i){
    if(scrollTop > pos[i] + base_line){
      $('#gnb li').removeClass('gnb_on').eq(i).addClass('gnb_on');

      $('section').removeClass('content_on');
      $('section').eq(i).addClass('content_on');
    }
  });

});






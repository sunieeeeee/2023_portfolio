$(function() { 

  $('.menu').on('click',function(event){
    event.preventDefault();
    var i = $(this).parent().index();
    $('.tab .pannel').hide().eq(i).fadeIn(); // 패널 나타나게 
    $('.tab >li').removeClass('on').eq(i).addClass('on'); // 효과 적용
  });
       
  // .menu 중에서 첫번째 것을 찾아 강제로 클릭해라(나는 클릭하지x, 프로그램 상에서 클릭이벤트를 발생시켜준다)
  $('.menu').first().trigger('click');
  
});













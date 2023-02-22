$(function(){

    $('.list>li>a').on('click', function(event){
        event.preventDefault(); // 클릭 이벤트의 기본기능을 막는다 = click의 기본기능-다른 곳으로 이동        
        $('.txt').stop().slideUp();
        $(this).next('.txt').stop().slideToggle();
    });
    
    $('.menu').on('click', function(){
        $('.pannel').removeClass('on');
        $(this).next('.pannel').addClass('on');
        
    });             
    
    
});






















          
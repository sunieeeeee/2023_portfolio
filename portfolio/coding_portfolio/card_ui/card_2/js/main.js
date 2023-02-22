$(function(){
    
    var swiper = new Swiper('#card .swiper-container', {

        loop : true, // 무한반복
        navigation: {
            nextEl: '#card .swiper-button-next', // 다음 버튼 지정
            prevEl: '#card .swiper-button-prev', // 이전 버튼 지정
        },
        
        // 모바일에서 값
        slidesPerView: 1, 
        slidesPerGroup: 1,
        spaceBetween: 25,
         centeredSlides: true,
        // 반응형 - 수치마다 바뀔값 입력
        breakpoints: {
            640: {
              slidesPerView: 2,
              
            },
            768: {
              slidesPerView: 3,
              
            }
          
        }
    });
    
   
    
    
    
});











const menu = document.querySelectorAll('.menu li');
const pannel = document.querySelectorAll('.pannel li');

menu.forEach((item,idx)=>{
  item.addEventListener('click',()=>{
    pannel.forEach((pannel_item , index)=>{
      menu[index].classList.remove('menu_on');
      item.classList.add('menu_on');
      
      pannel[index].classList.remove('open');
      pannel[idx].classList.add('open');
    });
  });
});




document.addEventListener('DOMContentLoaded', () => {
const burgerMenu = document.querySelector('.burger_menu'); 
const nav = document.querySelector('.nav'); 
 
burgerMenu.addEventListener('click', () => { 
  nav.classList.toggle('_active'); 
  burgerMenu.classList.toggle('_active');  
  //Optional: Smooth scrolling to the top when opening the menu 
  if (nav.classList.contains('_active')) { 
    window.scrollBy({ top: 0, behavior: 'smooth' }); 
  } 
}); 

//Optional: Close the menu if a link is clicked 
const navItems = document.querySelectorAll('.nav-item'); 
navItems.forEach(item => { 
  item.addEventListener('click', () => { 
    nav.classList.remove('_active'); 
    burgerMenu.classList.remove('_active'); 
  }); 
}); 
 
//Optional: Close the menu if clicking outside the menu area 
document.addEventListener('click', (e) => { 
  if (!nav.contains(e.target) && !burgerMenu.contains(e.target) && nav.classList.contains('_active')) { 
    nav.classList.remove('_active'); 
    burgerMenu.classList.remove('_active'); 
  } 
});



    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click',function(e){
           e.preventDefault();
           const href=this.getAttribute('href').substring(1);
   
           const scrollTarget=document.getElementById(href);
           const topOffset=document.querySelector('.header-line').offsetHeight;
           const elementPosition=scrollTarget.getBoundingClientRect().top;
           const offsetPosition=elementPosition-topOffset;
   
           window.scrollBy({
               top:offsetPosition,
               behavior: "smooth"
           });
        });
   });

   const scrollToTopBtn = document.getElementById('scrollToTopBtn');

   // Показываем кнопку при прокрутке вниз
   window.addEventListener('scroll', () => {
     if (window.scrollY > 300) { // Показываем кнопку, если прокрутили больше 300px
       scrollToTopBtn.style.display = 'block';
     } else {
       scrollToTopBtn.style.display = 'none';
     }
   });

   // Добавляем обработчик клика для кнопки
   scrollToTopBtn.addEventListener('click', () => {
     window.scrollTo({
       top: 0,
       behavior: 'smooth' // Плавная прокрутка
     });
   });
  });

  
  



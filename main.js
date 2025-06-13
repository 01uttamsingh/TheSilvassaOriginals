
//Swiper
var swiper = new Swiper(".home", {
        spaceBetween: 30,
        centeredSlides: true,
        
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('active'); // Fix: toggle navbar visibility
};

window.onscroll = () => {
    menu.classList.remove('fa-x');
    navbar.classList.remove('active'); // Fix: hide navbar on scroll
};

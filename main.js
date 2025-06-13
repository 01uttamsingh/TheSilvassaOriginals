
//Swiper
var swiper = new Swiper(".home", {
        spaceBetween: 30,
        centeredSlides: true,
        
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

// Toggle Menu Icon
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-x'); // change icon
  navbar.classList.toggle('active'); // show/hide navbar
};

// Hide navbar when scrolling
window.onscroll = () => {
  menu.classList.remove('fa-x');
  navbar.classList.remove('active');
};

// Close navbar when clicking any link (especially on mobile)
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menu.classList.remove('fa-x');
  });
});
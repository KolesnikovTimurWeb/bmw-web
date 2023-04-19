

const nav = document.querySelector('header')
function scrollHeader() {
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) {
    nav.classList.add('scroll-header');
  } else {
    nav.classList.remove('scroll-header')
  }
}
window.addEventListener('scroll', scrollHeader)


const burgerBtn = document.querySelector('.header__burger')
const burgerMenu = document.querySelector('.header-nav')

burgerBtn.addEventListener('click', function () {
  burgerBtn.classList.toggle('active')
  burgerMenu.classList.toggle('active')
})

const swiper2 = new Swiper('.models-container', {
  spaceBetween: 40,
  // grabCursor: true,
  slidesPerView: 1,
  grabCursor: true,
  freeMode: true,
  loop: true,
  // Navigation arrows
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1480: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
});

let links = document.querySelectorAll('.header-item')
links.forEach(link => {
  link.addEventListener('click', function () {
    burgerMenu.classList.remove("active")
    burgerBtn.classList.remove("active")
  })
})

const swiper3 = new Swiper('.catalog-container', {
  spaceBetween: 40,
  loop: true,
  slidesPerView: 1,
  freeMode: true,
  grabCursor: true,

  // Navigation arrows
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1480: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
});



const buttons = document.querySelectorAll('.main-button')
const form = document.querySelector('.form')
const close = document.querySelector('.form-icon')
buttons.forEach(button => {
  button.addEventListener('click', function () {
    form.classList.toggle('active')
  })
})

close.addEventListener('click', function(){
  form.classList.remove('active')
})
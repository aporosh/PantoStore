const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

for (let btn of infoBtns) {
   
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        for (let hint of infoHints) {
          hint.classList.add('none')
      }
        this.parentNode.querySelector('.info-hint').classList.toggle('none');
    });


}


document.addEventListener('click', function () {
    for (let hint of infoHints) {
        hint.classList.add('none')
    }
})


for (let hint of infoHints) {
    hint.addEventListener('click', (e) => e.stopPropagation());
}


//Swiper slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    //direction: 'vertical',
    loop: true,
    freeMode: true,
  
    slidesPerView: 1,
    spaceBetween:42,

    breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        920: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1230: {
          slidesPerView: 4,
          spaceBetween: 42,
        },
      },

    // Navigation arrows
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },
  
 
  });


//Tabs
const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsPoducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabsBtns) {
  btn.addEventListener('click', function () {
    for (let btn of tabsBtns) {
      btn.classList.remove('tab-controls__btn--active');
    }

    this.classList.add('tab-controls__btn--active');

    for (let product of tabsPoducts) {

      if (this.dataset.tab === 'all') {
        product.classList.remove('none');
      } else {
        if (product.dataset.tabValue ===  this.dataset.tab){
          product.classList.remove('none');
        } else {
          product.classList.add('none');
        }
      }
      
      
    }

    swiper.update()

   
  })
}


const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('#mobile-nav');


mobileNavOpenBtn.addEventListener('click', function () {
  mobileNav.classList.add('mobile-nav-wrapper--open')
})

/*
mobileNavOpenBtn.onClick = function () {
  console.log('open')
  mobileNav.classList.add('mobile-nav-wrapper--open')
}

mobileNavCloseBtn.onClick = function () {
  mobileNav.classList.remove('mobile-nav-wrapper--open')
}
*/

mobileNavCloseBtn.addEventListener('click', function () {
  mobileNav.classList.remove('mobile-nav-wrapper--open')
})
$(document).ready(function () {
  {
    $('.slider-wrapper').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="prev prev-review"></button>',
      nextArrow: '<button class="next next-review"></button>',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button class="prev prev-review"></button>',
            nextArrow: '<button class="next next-review"></button>'
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button class="prev prev-review"></button>',
            nextArrow: '<button class="next next-review"></button>'
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button class="prev prev-review"></button>',
            nextArrow: '<button class="next next-review"></button>'
          }
        }
      ]
    });
  }
  {
    const body = document.querySelector('body');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      links.forEach(link => {
        link.classList.toggle('fade');
      });
      body.classList.toggle('overflow-hidden');
      hamburger.classList.toggle('menuOpened')
    });
  }
});

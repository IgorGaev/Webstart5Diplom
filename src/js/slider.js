$(document).ready(function () {
  $('.hero-slider').slick({
    autoplay: 0,
    dots: true,
    arrows: false,
    autoplaySpeed: 4000,
    dotsClass: "hero__dots"
  });
  

  $('.reviews-slider').slick({
    dots: true,
    arrows: false,
    dotsClass: "reviews__dots",
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

})
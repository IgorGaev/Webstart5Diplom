$(document).ready(function () {
  $('.hero-slider').slick({
    autoplay: 0,
    dots: true,
    arrows: false,
    autoplaySpeed: 4000,
    dotsClass: "hero__dots"
  });
  $('.reviews-slider').slick({
    autoplay: 0,
    dots: true,
    arrows: false,
    dotsClass: "reviews__dots"
  });

})
$(document).ready(function () {
  $('.menu-trigger').click(function () {
    $('.header-navbar').slideToggle(500);
  }); //end slide toggle

  $(window).resize(function () {
    if ($(window).width() > 500) {
      $('.header-navbar').removeAttr('style');
    }
  }); //end resize
}); //end ready
$(document).ready(function () {

/* БУРГЕР МЕНЮ */

  $('.menu-trigger').click(function () {
    $('.header-navbar').slideToggle(500);
  }); //end slide toggle

  $(window).resize(function () {
    if ($(window).width() > 500) {
      $('.header-navbar').removeAttr('style');
    }
  }); //end resize



  /* Появление и закрытие модального окна */
  var btn = document.querySelector('#button');
  var modal = document.querySelector('#modal');
  var modalSuccess = document.querySelector('#modal-success');
  var close = document.querySelector('#close');
  var closeSuccess = document.querySelector('#close-success');


  function showModal() {
    modal.classList.add('modal_active');
    $("body").addClass("modal-open");
  };

  function hideModal() {
    modal.classList.remove('modal_active');
    $("body").removeClass("modal-open");
  };

  function hideModalSuccess() {
    modalSuccess.classList.remove('modal_active');
    $("body").removeClass("modal-open");

  };

  btn.addEventListener('click', showModal);
  close.addEventListener('click', hideModal);
  closeSuccess.addEventListener('click', hideModalSuccess);


  /* отправка на почту */

  $('#modal-form').submit(function (event) {

    event.preventDefault(); // останавливаем событие, прерываем
    var $form = $(this);

    if (!$form.valid()) return false;

    $.ajax({
      type: "POST",
      url: "php/mail.php",
      data: $(this).serialize(), // склеиваем все данные в одну строчку
      success: function (response) {
        console.log('Прибыли данные:' + response); // ответ в случае успеха    
        $('#modal-form')[0].reset(); // сброс формы
        modal.classList.remove('modal_active'); //закрываем модальную форму
        modalSuccess.classList.add('modal_active'); //выводим модальное подтверждение окно
        $("body").addClass("modal-open");
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.error(jqXHR); // ответ в случае ошибки
      }
    });
  });

  $('#footer__form').submit(function (event) {

    event.preventDefault(); // останавливаем собитие, прерываем
    var $form = $(this);

    if (!$form.valid()) return false;

    $.ajax({
      type: "POST",
      url: "php/mail.php",
      data: $(this).serialize(), // склеиваем все данные в одну строчку
      success: function (response) {
        console.log('Прибыли данные:' + response); // ответ в случае успеха    
        $('#footer__form')[0].reset(); // сброс формы
        modalSuccess.classList.add('modal_active'); //выводим модальное подтверждение окно
        $("body").addClass("modal-open");
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.error(jqXHR); // ответ в случае ошибки
      }
    });
  });

  
  /* Бургер меню */
  // var link = $('.menu-link')
  // var link_active = $('.menu-link_active')
  // var menu = $('.menu')

  // link.click(function () {
  //   link.toggleClass('menu-link_active');    
  //   menu.toggleClass('menu_active');    
  // });

  // link_active.click(function () {
  //   link.removeClass('menu-link_active');    
  // });

  $('.menu-link').click(function () {
    $(this).toggleClass('menu-link_active');
    $('.menu').toggleClass('menu_active');
  });

  $('.menu a').click(function () {
    $('.menu').removeClass('menu_active');
    $('.menu-link').removeClass('menu-link_active');
  });

  /* Появление -исчезновение кнопки ВВЕРХ и отложенная загрузка карты  */

  var btn = $('#button-up');

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });

  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
    if ($(window).scrollTop() > 2800) {
      $('#map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.717267229889!2d37.95168061583112!3d55.81550868057018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414acc59c3575ba9%3A0xbee91b004e1d06f9!2z0YPQuy4g0KHQvtCy0LXRgtGB0LrQsNGPLCA0OCwg0JHQsNC70LDRiNC40YXQsCwg0JzQvtGB0LrQvtCy0YHQutCw0Y8g0L7QsdC7LiwgMTQzOTAy!5e0!3m2!1sru!2sru!4v1574339568217!5m2!1sru!2sru" width="100%" height="666" frameborder="0" style="border:0;" allowfullscreen=""></iframe>');
      console.log("Карта заггурзилась");
      $(window).unbind('scroll');
      $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 300) {
          btn.addClass('show');
        } else {
          btn.removeClass('show');
        }
      });
    }
  });

  // /* ОТЛОЖЕННАЯ ЗАГРУЗКА КАРТЫ */

  // $(window).bind('scroll', function () {

  //   if ($(window).scrollTop() > 2800) {

  //     $('#map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.717267229889!2d37.95168061583112!3d55.81550868057018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414acc59c3575ba9%3A0xbee91b004e1d06f9!2z0YPQuy4g0KHQvtCy0LXRgtGB0LrQsNGPLCA0OCwg0JHQsNC70LDRiNC40YXQsCwg0JzQvtGB0LrQvtCy0YHQutCw0Y8g0L7QsdC7LiwgMTQzOTAy!5e0!3m2!1sru!2sru!4v1574339568217!5m2!1sru!2sru" width="100%" height="666" frameborder="0" style="border:0;" allowfullscreen=""></iframe>');
  //     console.log("Карта загрузилась");
  //     $(window).unbind('scroll');

  //   }
  // });



}); //end ready
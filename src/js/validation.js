$(document).ready(function () {

  $(".phone").mask("8 (999) 999-99-99");

  $('#modal-form').validate({
    errorClass: "invalid",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone: {
        required: true,
      }
    },
    messages: {
      username: {
        required: "Заполните поле",
        minlength: "Введите не менее 2 символов",
        maxlength: "Введите не более 15 символов"
      },
      phone: "Введите номер телефона"
    }
  });
  
  $('#footer__form').validate({
    errorClass: "invalid",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone: {
        required: true,
      }
    },
    messages: {
      username: {
        required: "Заполните поле",
        minlength: "Введите не менее 2 символов",
        maxlength: "Введите не более 15 символов"
      },
      phone: "Введите номер телефона"
    }
  });

  

})
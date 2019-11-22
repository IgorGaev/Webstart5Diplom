<?php
// Файлы phpmailer
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['username'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера GMAIL
    $mail->Username   = 'gaewebstart@gmail.com'; // Логин на почте
    $mail->Password   = 'DQnEix2g'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('gaewebstart@gmail.com', 'Igor Gaev'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('io.gaev@gmail.com'); // Ещё один, если нужен

        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
    
        $mail->Subject = 'Новая заявка';
        $mail->Body    = "<b>Имя:</b> $name <br> <b>Телефон:</b> $phone <br> <b>Эл. почта:</b> $email";
        
// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "Форма успешно отправлена";    
} else {
    echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
<?php
header('Content-Type: text/html; charset=utf-8');

require_once "mail.php";

$myemail = 'sergey.bn.spb@gmail.com'; //заменить на необходимый имейл

$html;
foreach ($_POST as $key => $value) {
  $html .= '<b>'.$key.'</b>: '.$value.'<br/>';
}

  $mail = new Mail("admin@yandex.ru"); // E-mail адрес
  $mail->setFromName("admin"); // Устанавливаем имя в обратном адресе
  if (!$mail->send($myemail, "Новая заявка", "<h2>Новая заявка</h2>".$html)) echo "<h2>Неправильно заполнен email!</h2>";

  echo "<h1>Спасибо!</h1>";

?>

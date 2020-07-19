<?php
    mail("info@awebd.ru",
    "Новая заявка",
    "Обратный звонок\n
     Имя: ".$_POST['name']." \n
     Телефон: ".$_POST['number'],
     "From: Awebd.ru <info@awebd.ru>\r\nContent-type: text/html; charset=windows-1251 \r\n"); 
    echo $_POST["number"];
?>
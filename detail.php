<?php
    mail("info@awebd.ru",
         "Новая заявка - Подробнее",
         "<h4>Подробнее</h4>
          <p>Имя: ".$_POST['name']."</p>
          <p>email: ".$_POST['email']." </p>
          <p>Телефон: ".$_POST['number']."</p>",
          "From: Awebd.ru <info@awebd.ru>\r\nContent-type: text/html; charset=utf-8 \r\n"); 
    echo $_POST['email'];
?>
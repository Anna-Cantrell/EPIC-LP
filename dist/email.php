<?php

if($_POST["name"] && $_POST["contact"]) {
    $recipient="anna.cantrell@crisp.agency";
    $subject=$_POST["name"] . ' - BE EPIC web registered';
    $name=$_POST["name"];
    $senderEmail=$_POST["contact"];

    $mailBody="Name: $name\nEmail: $senderEmail\n\n";

    mail($recipient, $subject, $mailBody, "From: $name <$senderEmail>");
    
    $url = 'http://localhost:8888?success=true';
    header('Location: ' . $url, false, 302);
    exit;
    
}

?>
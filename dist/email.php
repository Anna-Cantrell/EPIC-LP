<?php

if($_POST["name"] && $_POST["contact"]) {
    $recipient="anna.cantrell@crisp.agency";
    $subject=$_POST["name"] . ' - BE EPIC web registered';
    $name=$_POST["name"];
    $senderEmail=$_POST["contact"];

    $mailBody="Name: $name\nEmail: $senderEmail\n\n";

    mail($recipient, $subject, $mailBody, "From: $name <$senderEmail>");
    
    if ( preg_match( "/[\r\n]/", $name ) || preg_match( "/[\r\n]/", $senderEmail ) ) {
        $url = 'http://be-epic-raleigh.com/?success=false';
        header('Location: ' . $url, false, 302);
        exit;
    } else {
    
    $url = 'http://be-epic-raleigh.com/?success=true';
    header('Location: ' . $url, false, 302);
    exit; }
    
}

?>
<?php

if($_POST["submit"]) {
    $recipient="anna.cantrell@crisp.agency";
    $subject=$_POST["name"];
    $name=$_POST["name"];
    $senderEmail=$_POST["contact"];

    $mailBody="Name: $name\nEmail: $senderEmail\n\n";

    mail($recipient, $subject, $mailBody, "From: $name <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?>
<?php

//Using GET
//$var_value = $_GET['varname'];

//Using POST
//$var_value = $_POST['message'];

//Using GET, POST or COOKIE.
//$var_value = $_REQUEST['jam'];


//session_start();
//$_SESSION['regName'] = $regValue;

// gets posted json data
$json_input = file_get_contents("php://input");
$_POST = json_decode($json_input, true);

$var_firstname = $_POST["FirstName"];
$var_lastname = $_POST["LastName"];
$var_message = $_POST["Message"];
$var_email = $_POST["Email"];
$var_ProductUpdates = $_POST["ProductUpdates"];
$var_subject = $_POST["subject"];

$var_timestamp = date("Y-m-d H:i:s");


$headers = 'From: no-reply@otterbinesolutions.com' . "\r\n" .
    'Reply-To: no-reply@otterbinesolutions.com' . "\r\n" .
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8".
    'X-Mailer: PHP/' . phpversion();
    // to send html email
    //$email_text = file_get_contents('Email.html');
    // or...
$email_text =
"<table>".
"<tr><td style=\"font-size:14px;background-color:#dedede;\" colspan=\"2\">ServerTimestamp: ".$var_timestamp."</td></tr>".
"<tr><td>Email Address: </td><td>".$var_email."</td></tr>".
"</table>".
"<table style=\"font-weight:700;\">".
"<tr><td>".$var_message."</td></tr>".
"</table>".
"<table>".
"<tr><td>User Agent Information: </td><td>".$_SERVER['HTTP_USER_AGENT']."</td></tr>".
"</table>".
"<table style=\"margin-top:20px\">".
"<tr><td><h4>Thank you, from the team at Otterbine Solutions!</h4></td></tr>".
"</table>";

// "Browser Information: ".get_browser(null, true);

$success = mail($var_email, $var_subject, $email_text, $headers);


if (!$success) {
    $errorMessage = error_get_last()['message'];

}
else
{
    $errorMessage = "Email Sent...";
}


?>

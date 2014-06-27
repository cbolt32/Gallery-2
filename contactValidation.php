<?php
/* Set e-mail recipient */
$myemail = "cbolt32@yahoo.co.uk"; //todo-Chris Change to shans hosted email when uploaded

/* Check all form inputs using check_input function */
$myName = check_input($_POST['myName'], "Enter your name");
$myEmail = check_input($_POST['myEmail'], "Enter Your Email");
$phoneNum = check_input($_POST['phoneNum']);
$enquiryType = check_input($_POST['enquiryType'], "Please Provide An Enquiry Type");
$enquiry = check_input($_POST['enquiry']);

/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $myEmail)) {
    show_error("E-mail address not valid");

}

/* Let's prepare the message for the e-mail */
$subject = $enquiryType;
$message = "Hello!


A contact form was submitted via your website from $myName ,
who can be contacted on: $myEmail

The $enquiryType contained the following detail;

$enquiry

End of message
";

/* Send the message using mail() function */
mail($myemail, $subject, $message);

/* Redirect visitor to the thank you page */
header('Location: thankYou.php');
exit();

/* Functions we used */
function check_input($data, $problem = '')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0) {
        show_error($problem);

    }
    return $data;
}

function show_error($myError)
{
    ?>
    <html>
    <body>

    <b>Please correct the following error:</b><br/>
    <?php echo $myError; ?>

    </body>
    </html>
    <?php
    exit();
}
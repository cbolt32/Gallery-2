<?php
/* Set e-mail recipient */
$myemail = "enquirys@shannonsait.co.uk";

/* Check all form inputs using check_input function */
$myName = check_input($_POST['myName'], "Enter your name");
$myEmail = check_input($_POST['myEmail']);
$phoneNum = check_input($_POST['phoneNum']);
$enquiryType = check_input($_POST['enquiryType'], "Please Provide An Enquiry Type");
$enquiry = check_input($_POST['enquiry'], "Please provide details of your enquiry");

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
    <!-- Bootstrap -->
    <link href='http://fonts.googleapis.com/css?family=Fenix|Roboto+Condensed:300italic,400italic,700italic,400,700,300'
          rel='stylesheet' type='text/css'>
    <link href="_/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" href="_/css/myStyles.css">
    <script type="text/javascript">
        var timer = 1.5;
        website = "Contact.php";
        function delayer() {
            window.location = website;
        }
        setTimeout('delayer()', '2000' * timer);
    </script>
    <body id="Thanks">
<section class="container">
    <div class="content row" id="thanksContent">
        <section class="main col col-lg-12" id="thankyou">
            <b>Please correct the following error:</b><br/>
            <?php echo $myError; ?>

    </div>
    <!--content-->
</section>
<!--container-->
<?php exit(); ?>
<?php

}

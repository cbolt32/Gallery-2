<!DOCTYPE html>
<html>
<head>
    <title>Shannon Sait | About Myself</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1.0">
    <!-- Bootstrap -->
    <link href='http://fonts.googleapis.com/css?family=Fenix|Roboto+Condensed:300italic,400italic,700italic,400,700,300'
          rel='stylesheet' type='text/css'>
    <link href="_/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" href="_/css/old_myStyles.css">
    <!--Script to redirect page to home after specified dealy    -->
    <script type="text/javascript">
        var timer = 3;
        website = "home.php";
        function delayer() {
            window.location = website;
        }
        setTimeout('delayer()', '2000' * timer);
    </script>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
</head>
<body id="Thanks">
<section class="container">
    <div class="content row" id="thanksContent">
        <section class="main col col-lg-12"  id="thankyou">
            <h1>Thank You <?php echo $_POST['myName']; ?> for submitting your form</br>
                I shall, if required endeavour to contact you on
                <?php echo $_POST['myEmail']; ?> as soon as im available</br>
                Many thanks for taking the time to contact me/offer your feedback </h1></br>
                <h3>You will be redirected automatically...</h3>
        </section><!--main content-->
    </div><!--content-->
</section><!--container-->

</body>
</html>



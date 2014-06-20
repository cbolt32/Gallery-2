<!DOCTYPE html>
<html>
<head>
    <title>Shannon Sait | About Myself</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1.0">
    <!-- Bootstrap -->
    <link href='http://fonts.googleapis.com/css?family=Fenix|Roboto+Condensed:300italic,400italic,700italic,400,700,300'
          rel='stylesheet' type='text/css'>
    <link href="_/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" href="_/css/myStyles.css">
    <!--Script to redirect page to home after specified dealy    -->
    <script type="text/javascript">
        var timer = 3;
        website = "home.php";
        function delayer() {
            window.location = website;
        }
        setTimeout('delayer()', '1000' * timer);
    </script>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
</head>
<body id="Home">
<section class="container">
    <div class="content row" id="main">
        <section class="main col col-lg-8">
            <h1>Thank You <?php echo $_POST['myName']; ?> for submitting you form</br>
                You will receive a confirmation email at <?php echo $_POST['myEmail']; ?></br>
                Many thanks for contacting me </h1>
        </section><!--main content-->
        <section class="sidebar col col-lg-4">
        </section><!--sidebar-->
    </div><!--content-->
</section><!--container-->

</body>
</html>



<!DOCTYPE html>
<html>
<head>
    <title>Shannon Sait | Contact Me</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1.0">
    <!-- Bootstrap -->
    <link href='http://fonts.googleapis.com/css?family=Fenix|Roboto+Condensed:300italic,400italic,700italic,400,700,300'
          rel='stylesheet' type='text/css'>
    <link href="_/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" href="_/css/myStyles.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->

</head>
<body id="ContactMe">
<?php include_once("_/Components/php/analyticstracking.php") ?>
<section class="container">
    <div class="content row" id="contactContent">
        <?php include "_/Components/php/header.php"; ?>
<!--        --><?php //include "_/Components/php/snipet-carousel.php"; ?>
        <section class="main col col-lg-8">
            <?php include "_/Components/php/article-contactForm.php"; ?>
        </section>
        <!--main content-->
        <section class="sidebar col col-lg-4">
            <?php include "_/Components/php/aside-googleMaps.php"; ?>
            <?php include "_/Components/php/aside-feedback.php"; ?>

        </section>
        <!--sidebar-->
    </div>
    <!--content-->
    <?php include "_/Components/php/footer.php"; ?>
</section>
<!--container-->


<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="_/js/bootstrap.js"></script>
<script src="_/js/myScript.js"></script>
</body>
</html>
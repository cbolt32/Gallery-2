<!DOCTYPE html>
<html>
<head>
    <title>Shannon Sait | Home</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1.0">

    <!-- Bootstrap -->

    <link href="_/css/bootstrap.css" rel="stylesheet">
    <link href="_/css/myStyles.css" rel="stylesheet">
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="_/js/bootstrap.js"></script>
    <script src="_/js/myScript.js"></script>
    <script src="_/js/jquery.zrssfeed.js"></script>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <![endif]-->

</head>
<body id="Home">
<?php include_once("_/Components/php/analyticstracking.php") ?>
<section class="container">
    <div class="content row" id="homeContent">
        <?php include "_/Components/php/header.php"; ?>
        <?php include "_/Components/php/snippet-carousel.php"; ?>
        <section class="main col col-lg-8">
            <?php include "_/Components/php/article-intro.php"; ?>

        </section>
        <!--main content-->
        <section class="sidebar col col-lg-4">
            <?php include "_/Components/php/article-news.php"; ?>
            <?php include "_/Components/php/aside_blogPosts.php"; ?>
        </section>
        <!--sidebar-->
    </div>
    <!--content-->
    <?php include "_/Components/php/footer.php"; ?>
</section>
<!--container-->


</body>
</html>
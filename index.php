<!DOCTYPE html>
<html id="landing" xmlns="http://www.w3.org/1999/html">
<head>
    <title>Shannon Sait | Fine Artist, Welcome To My Site</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1.0">
    <meta name="description" content="Shannon Sait, Artists Gallery">
    <meta name="keywords" content="Shannon Sait, artist, gallery, painting, brighton, sussex, newhaven, art fair">
    <!-- Bootstrap -->
    <link href="_/css/bootstrap.css" rel="stylesheet">
    <link href="_/css/myStyles.css" rel="stylesheet">
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="_/js/bootstrap.js"></script>
    <script src="_/js/myScript.js"></script>
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <![endif]-->
    <!-- start Mixpanel -->
    <script type="text/javascript">(function (f, b) {
            if (!b.__SV) {
                var a, e, i, g;
                window.mixpanel = b;
                b._i = [];
                b.init = function (a, e, d) {
                    function f(b, h) {
                        var a = h.split(".");
                        2 == a.length && (b = b[a[0]], h = a[1]);
                        b[h] = function () {
                            b.push([h].concat(Array.prototype.slice.call(arguments, 0)))
                        }
                    }

                    var c = b;
                    "undefined" !== typeof d ? c = b[d] = [] : d = "mixpanel";
                    c.people = c.people || [];
                    c.toString = function (b) {
                        var a = "mixpanel";
                        "mixpanel" !== d && (a += "." + d);
                        b || (a += " (stub)");
                        return a
                    };
                    c.people.toString = function () {
                        return c.toString(1) + ".people (stub)"
                    };
                    i = "disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user".split(" ");
                    for (g = 0; g < i.length; g++)f(c, i[g]);
                    b._i.push([a, e, d])
                };
                b.__SV = 1.2;
                a = f.createElement("script");
                a.type = "text/javascript";
                a.async = !0;
                a.src = "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";
                e = f.getElementsByTagName("script")[0];
                e.parentNode.insertBefore(a, e)
            }
        })(document, window.mixpanel || []);
        mixpanel.init("e790b9db2e51f4c5b1c0c28934f072d2");</script>
    <!-- end Mixpanel -->

</head>

<body id="landingPage">
<?php include ("_/Components/php/analyticstracking.php") ?>

<?php include ('_/Components/php/article-landingPage.php'); ?>

</body>
<!--</section>-->
<!--</body>-->
</html>
<article id="blogPostsArticle">
    <h3>Recent Blog Posts</h3>

    <div id="blogPosts">
        <?php
        //---Code to display RSS feeds using MagpieRSS
        define('MAGPIECACHEDIR', '_/Components/magpierss/tmp/magpie_cache');
        $url = 'http://shannonsait.wordpress.com/feed/'; //this is the url of the feed, enter your own url here
        $rss = fetch_rss($url);

        //    $i = 0;
        //    $max = 4;
        //    foreach ($rss->items as $item ) {
        //    $title = $item['title'];
        //    $content = $item['media:content']['url'];
        //    $image = $item['description'];
        //    $pubDate = $item['updated'];
        //
        //
        //    echo "<li>$image <br/>$title<br />$content<br/>$pubDate</li>";//<a href='$url'></a>
        //    if (++$i == $max) break;

        //
        //    foreach ( $rss->items as $item ) { //loop through the $rss array which contains the feeds
        //        echo "<div style='margin: 5px 0 5px 0;'>";
        //        echo "<div style='font-weight: bold;'>{$item['title']}</div>";
        //        echo "<div style=''>{$item['description']}</div>";
        //        //echo "<div style''>{$item['enclosure_url']}</div>";
        //        echo "<div style''>{$item['content']['encoded']['!CDATA']}</div>";
        //        $href = $item['link'];


        for ($i = 0; $i < 5; $i++) { //sizeof($rss->items); $i++){ commented selector takes allelements
            $output .= '<h4>' . $rss->items[$i]['title'] . '</h4>';
            $output .= $rss->items[$i]['description'] . '<br>';
            $output .= $rss->items[$i]->children['media:content'] . '<br>';
            // $output .= $node->getElementsByTagName('content')->item(0)->nodeValue;
        }
        echo $output;


        ?>
    </div>
</article>
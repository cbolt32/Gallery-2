$(function () {


    //Highlight current nav, prevents error as header.php utilised as php include in each page

    $("#Home a:contains('Home')").parent().addClass('active'); //if page # is home, and an a tag contains "Home" add active class to parent (li) tag
    $("#about a:contains('About Myself')").parent().addClass('active');
    $("#gallery a:contains('Gallery')").parent().addClass('active');
    $("#ContactMe a:contains('Contact')").parent().addClass('active');


    //show modals
    $('img.thumbnail').on('click', function () {
        $('#modal').modal({
            show: 'true'
        });

        var mysrc = this.src.substr(0, this.src.length - 5) + '.jpeg';
        $('#modalimage').attr('src', mysrc);
        $('#modalimage').on('click', function () {
            $('#modal').modal('hide');
        });//hide modal
    });//show modal

    //activate .carousel
    $('#myCarousel').carousel({
        interval: '3000'

    });
    $(document).ready(function () {
        $('#blogPosts').rssfeed('http://shannonsait.wordpress.com/feed/', {
            limit: 7
        });
    });

});
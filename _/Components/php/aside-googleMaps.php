    <h2>My Studio</h2>

    <script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
    <script>
        function initialize() {
            var map_canvas = document.getElementById('map_canvas');
            var map_options = {
                center: new google.maps.LatLng(50.8060, 0.0575),
                zoom: 40,
                mapTypeId: google.maps.MapTypeId.HYBRID
            };
            var map = new google.maps.Map(map_canvas, map_options)
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    </script>


<div id="map_canvas"></div>

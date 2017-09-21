function initMap() {
    var winterpark = {
            info: '<strong>Swift Nature Camp - Wisconsin</strong><br>\
                        W7471 E. Swift Rd<br> Minong, WI 54859<br>\
                        <a href="https://goo.gl/maps/oh5zM7s6tUs">Get Directions</a>',
            lat: 46.15743,
            long: -91.92095
        };

    var mineola = {
            info: '<strong>Swift Nature Camp - Illinois</strong><br>\
                        25 Baybrook Ln.<br> Oak Brook, IL 60523<br>\
                        <a href="https://goo.gl/maps/8TXZMPbQgS92">Get Directions</a>',
            lat: 41.8406,
            long: -87.97745
        };

    var locations = [
          [winterpark.info, winterpark.lat, winterpark.long, 0],
          [mineola.info, mineola.lat, mineola.long, 1]
        ];

     var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 5,
            center: new google.maps.LatLng(45.31546, -89.60723),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

     var infowindow = new google.maps.InfoWindow({});

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}
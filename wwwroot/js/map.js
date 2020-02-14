function initMap() {
    var cherkasy = new google.maps.LatLng(49.445655, 32.052548);
    var mark = new google.maps.LatLng(49.445444, 32.056537);


    var map = new google.maps.Map(document.getElementById('map'), {
        center: cherkasy,
        zoom: 17,
        disableDefaultUI: true
    });

    var marker = new google.maps.Marker({
        position: mark,
        map: map,
        title: 'МСЛ, 208/, Shevchenka Blvd, 242/1'
    });

    var coordInfoWindow = new google.maps.InfoWindow();
    //coordInfoWindow.setContent(createInfoWindowContent(cherkasy, map.getZoom()));
    coordInfoWindow.setPosition(cherkasy);
    coordInfoWindow.open(map);

    map.addListener('zoom_changed', function () {
        //coordInfoWindow.setContent(createInfoWindowContent(chicago, map.getZoom()));
        coordInfoWindow.open(map);
    });
}

var TILE_SIZE = 256;

// The mapping between latitude, longitude and pixels is defined by the web
// mercator projection.
function project(latLng) {
    var siny = Math.sin(latLng.lat() * Math.PI / 180);

    // Truncating to 0.9999 effectively limits latitude to 89.189. This is
    // about a third of a tile past the edge of the world tile.
    siny = Math.min(Math.max(siny, -0.9999), 0.9999);

    return new google.maps.Point(
        TILE_SIZE * (0.5 + latLng.lng() / 360),
        TILE_SIZE * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI)));
}

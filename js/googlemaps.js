
$(document).ready(function() {
        var mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(49.843098, 24.027039),
        mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 });
/**
 * Created by david on 09/11/2013.
 */

var mapApp = angular.module('mean.mapComponentsApp', []);

mapApp.directive('googleMaps', function () {
    return function (scope, elem, attrs) {
        var mapOptions,
            latitude = attrs.latitude,
            longitude = attrs.longitude,
            map;

        latitude = latitude && parseFloat(latitude, 10) || 43.074688;
        longitude = longitude && parseFloat(longitude, 10) || -89.384294;

        mapOptions = {
            zoom: 8,
            center: new google.maps.LatLng(latitude, longitude)
        };

        map = new google.maps.Map(elem[0], mapOptions);
    };
});
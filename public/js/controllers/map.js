angular.module('mean.mapComponentsApp').controller('MapController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
    $scope.mapName='david';
}]);
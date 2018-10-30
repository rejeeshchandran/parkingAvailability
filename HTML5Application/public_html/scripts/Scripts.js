// module
var myApp = angular.module("myModule",[]);


myApp.controller("myController", function($scope) {
    var parking = {
      deviceName: "aplm",
      parkStatus: "occupied",
      lastSeen: "images/car.jpeg"
    };
    $scope.parking = parking;
});
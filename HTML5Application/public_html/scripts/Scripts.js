// module
var myApp = angular
        .module("myModule",[])
        .controller("myController", function($scope) {
            var parkingStatus = [
                {name: "F101", Parkstatus : 0},
                {name: "F102", Parkstatus : 0},
                {name: "F103", Parkstatus : 0},
                {name: "F104", Parkstatus : 0},
                {name: "F105", Parkstatus : 0},
                {name: "F106", Parkstatus : 0},
        
            ];
            $scope.parkingStatus = parkingStatus;
            $scope.parkstatusempty = function(park) {
                park.Parkstatus = 0;
            }
            $scope.parkstatusoccupied = function(park) {
                park.Parkstatus++;
            }
        });

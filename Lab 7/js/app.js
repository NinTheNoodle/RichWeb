
var myApp = angular.module('myApp', []);

myApp.controller('MovieController', function MovieController ($scope, $http) {
    $scope.pendingTitle = "";
    $scope.change = function() {
        if ($scope.search === "") {
            $scope.details = undefined;
            $scope.related = undefined;
        }
        else {
            $scope.fetch($scope.search);
        }
    }
    
    $scope.update = function(movie) {
        $scope.fetch(movie["Title"]);
    }
    
    $scope.fetch = function(title) {
        $scope.details = {};
        $scope.related = {};
        
        $http({
            method: 'GET',
            url: "http://www.omdbapi.com/?plot=full&tomatoes=True&t=" + title
        }).then(function successCallback(response) {
            $scope.details = response.data;
        });
        
        $http({
            method: 'GET',
            url: "http://www.omdbapi.com/?s=" + title
        }).then(function successCallback(response) {
            $scope.related = response.data;
        });
    }
});
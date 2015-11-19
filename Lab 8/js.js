var app = angular.module('app', []);
var firebase = new Firebase("https://blistering-heat-591.firebaseio.com/");

app.controller('MessageController', function MessageController ($scope) {
    $scope.messages = [];
    
    firebase.child("messages").on("child_added", function(snapshot, prevChildKey) {
        $scope.messages.push(snapshot.val());
    });
    
    $scope.sendMessage = function sendMessage () {
        firebase.child("messages").push({
            username: $scope.username,
            data: $scope.currentMessage
        });
    };
    
});
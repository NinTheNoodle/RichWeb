contactManager.controller('AppCtrl', function AppCtrl ($scope, $routeParams, $location) {
    $scope.contacts = [{
        name: 'John Smith',
        phone: '087-1234567'
    }];
    
    $scope.back = function() {
        $location.path("/");
    };
});

// This controller simply aliases the contact based on 
// the parameter passed through by the routing configuration.
contactManager.controller('InfoCtrl',
	function InfoCtrl($scope, $routeParams) {
		$scope.contact = $scope.contacts[$routeParams.id];
});

contactManager.controller('AddCtrl', function AddCtrl($scope, $routeParams, $location) {
		$scope.contact = {};
        $scope.add = function() {
            $scope.contacts.push($scope.contact);
            $scope.back();
        };
});
		  
contactManager.controller('RemoveCtrl', function RemoveCtrl($scope, $routeParams, $location) {
        $scope.remove = function() {
            $scope.contacts.splice($routeParams.id, 1);
            $scope.back();
        };
        
});
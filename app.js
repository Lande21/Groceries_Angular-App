// Define the AngularJS application module

var app = angular.module('shoppingListApp', []);

//Define the controller for the application
app.controller('ShoppingListController', function($scope){
    $scope.items = [];
    $scope.newItem = '';

    $scope.addItem = function() {
        if ($scope.newItem.trim() !== '') {
            $scope.items.push($scope.newItem.trim());
            $scope.newItem = '';

        }

    };

    $scope.removeItem = function(index) {
        $scope.items.splice(index, 1);
    };

});
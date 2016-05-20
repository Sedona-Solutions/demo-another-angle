var jsFatigueApp = angular.module('jsFatigueApp', []);

jsFatigueApp.controller('TechListCtrl', function($scope, $http) {
    $http.get('/seed/techs.json').success(function(res) {
        $scope.techs = res;
    })

    $scope.remove = function(index) {
        $scope.techs.splice(index, 1);
    };
});

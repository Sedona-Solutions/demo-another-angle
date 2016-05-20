var jsFatigueApp = angular.module('jsFatigueApp', ['jsFatigueApp.techList']);

jsFatigueApp.controller('TechListCtrl', function ($scope, TechListService) {

    TechListService.getTechs().then(function (techs) {
        $scope.techs = techs.data;
    });

    $scope.remove = function (index) {
        $scope.techs.splice(index, 1);
    };
});

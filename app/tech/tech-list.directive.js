'use strict';

angular.module('jsFatigueApp.tech')
    .directive('techList', function () {
        return {
            selector: 'E',
            controller: function ($scope, TechListService) {
                TechListService.getTechs().then(function (techs) {
                    $scope.techs = techs.data;
                });

                $scope.remove = function (index) {
                    $scope.techs.splice(index, 1);
                };
            },
            templateUrl: 'app/tech/tech-list.directive.tpl.html'
        };
    });

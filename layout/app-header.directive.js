angular.module('jsFatigueApp.layout')
    .directive('appHeader', function () {
        return {
            selector: 'E',
            templateUrl: 'layout/app-header.directive.tpl.html'
        };
    });
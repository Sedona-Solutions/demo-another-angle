angular.module('jsFatigueApp.layout')
    .directive('appHeader', function () {
        return {
            selector: 'E',
            templateUrl: 'app/layout/app-header.directive.tpl.html'
        };
    });
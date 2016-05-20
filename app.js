var jsFatigueApp = angular.module('jsFatigueApp', []);

jsFatigueApp.controller('TechListCtrl', function ($scope) {
  $scope.techs = [
    {name: 'JQuery'},
    {name: 'MooTools'},
    {name: 'React'},
    {name: 'Angular'},
    {name: 'Polymer'},
    {name: 'Ember'},
    {name: 'Backbone'},
    {name: 'Meteor (Blaze)'},
    {name: 'Vue'},
    {name: 'Knockout'},
    {name: 'Ext'},
    {name: 'Dojo'},
    {name: 'Mercury'},
    {name: 'Ionic'},
    {name: 'Redux'},
    {name: 'Aurelia'}
  ];

  $scope.remove = function (index) {
    $scope.techs.splice(index, 1);
  };
});

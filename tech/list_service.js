angular.module('jsFatigueApp.techList')
.factory('TechListService', function ($http) {
  return {
    getTechs () {
      return $http.get('/seed/techs.json').success(function (techs) {
        return techs;
      });
    }
  };
});

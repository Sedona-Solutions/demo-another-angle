angular.module('jsFatigueApp.tech')
    .factory('TechListService', ($http) => {

        class TechListService {

            constructor(){}

            getTechs () {
                return $http.get('seed/techs.json').success((techs) => {
                    return techs;
                });
            }
        }

        return new TechListService();
    });

'use strict';

angular.module('jsFatigueApp.tech')
    .directive('techList', (TechListService) => {

        class TechList {

            constructor(){
                TechListService.getTechs().then((techs) => {
                    this.techs = techs.data;
                });
            }

            remove(index) {
                this.techs.splice(index, 1);
            }
        }

        return {
            selector: 'E',
            controller: TechList,
            bindToController: true,
            controllerAs: '$ctrl',
            templateUrl: 'app/tech/tech-list.directive.tpl.html'
        };
    });

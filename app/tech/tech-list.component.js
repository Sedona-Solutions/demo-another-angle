'use strict';

(() => {
    class TechList {

        constructor(TechListService) {
            this.techListService = TechListService;
        }


        $onInit() {
            this.techListService.getTechs().then((techs) => {
                this.techs = techs.data;
            });
        }

        remove(index) {
            this.techs.splice(index, 1);
        }
    }

    angular.module('jsFatigueApp.tech')
        .component('techList', {
            controller: TechList,
            templateUrl: 'app/tech/tech-list.component.tpl.html',
            bindings: {
                filter: '<'
            }
        });
})();

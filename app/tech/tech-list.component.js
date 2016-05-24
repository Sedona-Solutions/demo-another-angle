'use strict';


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

export let TechListComponent = {
    controller: TechList,
    templateUrl: 'app/tech/tech-list.component.tpl.html',
    bindings: {
        filter: '<'
    }
};

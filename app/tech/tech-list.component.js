'use strict';

import { TechListService } from 'app/tech/tech.service';

import { Component } from 'ng-decorators/Component';
import { Module } from 'ng-decorators/Module';

@Module({
    name: 'jsFatigueApp.tech',
    templatesDependencies: false
})
@Component({
    selector: 'tech-list',
    templateUrl: 'app/tech/tech-list.component.tpl.html',
    bindings: {
        filter: '<'
    },
    providers: [ TechListService ]
})
export class TechList {

    constructor(techListService) {
        this.techListService = techListService;
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

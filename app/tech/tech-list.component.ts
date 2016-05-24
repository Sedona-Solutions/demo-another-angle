'use strict';

import { TechListService } from 'app/tech/tech.service';

import { Component } from 'ng-decorators/Component';
import { Module } from 'ng-decorators/Module';

interface Tech {
    name: String
}

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

    techs: Tech[]

    constructor (private techListService : TechListService) {
        this.techListService = techListService;
    }

    $onInit() : void {
        this.techListService.getTechs().then((techs) => {
            this.techs = techs.data;
        });
    }

    remove(index: number) : void {
        this.techs.splice(index, 1);
    }
}

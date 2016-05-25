'use strict';

///<reference path="../typings/ng-decorators.d.ts"/>

import { TechListService } from 'app/tech/tech.service';
import { ITech } from './ITech';


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

    techs: ITech[]
    public static $ngmodule: { name: String }

    constructor (private techListService : TechListService) {
        this.techListService = techListService;
    }

    $onInit() : void {
        this.techListService.getTechs().then((techs : any) => {
            this.techs = techs.data;
        });
    }

    remove(index: number) : void {
        this.techs.splice(index, 1);
    }
}

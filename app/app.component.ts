"use strict";

///<reference path="./typings/ng-decorators.d.ts"/>
///<reference path="../typings/index.d.ts"/>

import 'angular-ui-router';
import 'ui-router-extras';
import 'ocLazyLoad';

import { AppHeader } from 'app/app-header.component';
import { SdnSearchBar } from 'app/commons/search-bar.component';
import { TechList } from 'app/tech/tech-list.component';

import { Component } from 'ng-decorators/Component';
import { Module } from 'ng-decorators/Module';

@Module({
    name: 'jsFatigueApp',
    dependencies: [
        'ui.router',
        'ct.ui.router.extras',
        'oc.lazyLoad',
        TechList.$ngmodule.name,
        SdnSearchBar.$ngmodule.name
    ],
    main: true,
    html5mode: {
        enabled: true,
        requireBase: false
    },
    debug: true,
    templatesDependencies: false
})
@Component({
    selector: 'js-fatigue',
    template: `
        <app-header on-search-update="$ctrl.setListFilter({ query : query })"></app-header>
        <tech-list filter="$ctrl.listFilter"></tech-list>
    `,
    directives: [ AppHeader ]
})
export class JsFatigue {

    _listFilter: String = '';

    constructor() {}

    setListFilter({ query }) {
        this._listFilter = query;
    }

    get listFilter() {
        return this._listFilter;
    }
}

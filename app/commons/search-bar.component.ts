"use strict";

import angular from 'angular';

import { Component } from 'ng-decorators/Component';
import { Module } from 'ng-decorators/Module';

@Module({
    name: 'sdn.SearchBar',
    templatesDependencies: false
})
@Component({
    selector: 'sdn-search-bar',
    template: `
            <input type="text" class="form-control" ng-model="$ctrl.query" ng-change="$ctrl.updateSearch()" placeholder="Search..."/>
        `,
    bindings: {
        'onUpdate': '&'
    }
})
export class SdnSearchBar {

    query : String = ''
    onUpdate : (obj: { query }) => void

    constructor() {
    }

    updateSearch() {
        this.onUpdate({
            query: this.query
        });
    }
}

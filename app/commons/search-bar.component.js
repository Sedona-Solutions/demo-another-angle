"use strict";

import angular from 'angular';

class SdnSearchBar {

    constructor() {
        this.query = '';
    }

    updateSearch() {
        this.onUpdate({
            query: this.query
        });
    }
}

export default angular.module('sdn.SearchBar', [])
    .component('sdnSearchBar', {
        template: `
                <input type="text" class="form-control" ng-model="$ctrl.query" ng-change="$ctrl.updateSearch()" placeholder="Search..."/>
            `,
        controller: SdnSearchBar,
        bindings: {
            'onUpdate': '&'
        }
    });

"use strict";

(() => {

    class SdnSearchBar {

        constructor() {
            this.query = '';
        }

        updateSearch() {
            this.onUpdate({ query: this.query });
        }
    }
    angular.module('sdn.SearchBar', [])
        .component('sdnSearchBar', {
            template: `
                <input type="text" class="form-control" ng-model="$ctrl.query" ng-change="$ctrl.updateSearch()" placeholder="Search..."/>
            `,
            controller: SdnSearchBar,
            bindings: {
                'onUpdate' : '&'
            }
        });
})();

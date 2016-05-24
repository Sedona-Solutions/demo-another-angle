"use strict";


(()=> {
    class JsFatigue {
        constructor() {
            this._listFilter = '';
        }

        setListFilter({ query }) {
            this._listFilter = query;
        }

        get listFilter() {
            return this._listFilter;
        }
    }

    angular.module('jsFatigueApp', [
        'jsFatigueApp.layout',
        'jsFatigueApp.tech'
    ]).component('jsFatigue', {
        template: `
            <app-header on-search-update="$ctrl.setListFilter({ query : query })"></app-header>
            <tech-list filter="$ctrl.listFilter"></tech-list>
        `,
        controller: JsFatigue
    });
})();

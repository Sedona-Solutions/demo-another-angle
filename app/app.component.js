"use strict";


(()=> {
    class JsFatigue {
        constructor() {
            this._listFilter = '';
        }

        setListFilter(filter) {
            this._listFilter = filter;
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
            <app-header on-search-update="$ctrl.setListFilter(search)"></app-header>
            <tech-list filter="$ctrl.listFilter"></tech-list>
        `
    });
})();



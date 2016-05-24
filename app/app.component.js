"use strict";

import angular from 'angular';
import LayoutModule from 'app/layout/layout.module';
import TechModule from 'app/tech/tech.module';

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

export default angular.module('jsFatigueApp', [
    LayoutModule.name,
    TechModule.name
]).component('jsFatigue', {
    template: `
            <app-header on-search-update="$ctrl.setListFilter({ query : query })"></app-header>
            <tech-list filter="$ctrl.listFilter"></tech-list>
        `,
    controller: JsFatigue
});

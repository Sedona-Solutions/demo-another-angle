"use strict";

(() => {
    class AppHeader {
        constructor() {}

        updateSearch(query) {
            this.onSearchUpdate(query);
        }
    }

    angular.module('jsFatigueApp.layout')
        .component('appHeader', {
            template: `
                <nav class="navbar navbar-inverse navbar-fixed-top">
                    <div class="container">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">JS Fatigue</a>
                        </div>
                    <div class="navbar-form navbar-right">
                        <div class="form-group">
                            <sdn-search-bar on-update="$ctrl.updateSearch(query)"></sdn-search-bar>
                        </div>
                    </div>
                </nav>
            `,
            bindings: {
                onSearchUpdate : '&'
            },
            controller: AppHeader
        });
})();


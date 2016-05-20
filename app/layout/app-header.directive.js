angular.module('jsFatigueApp.layout')
    .directive('appHeader', () => {
        return {
            selector: 'E',
            bindToController: true,
            controllerAs: 'nav',
            template: `
                <nav class="navbar navbar-inverse navbar-fixed-top">
                    <div class="container">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">JS Fatigue</a>
                        </div>
                    <div class="navbar-form navbar-right">
                        <div class="form-group">
                            <input class="form-control" ng-model="$ctrl.query" placeholder="Search..."/>
                        </div>
                    </div>
                </nav>
            `
        };
    });
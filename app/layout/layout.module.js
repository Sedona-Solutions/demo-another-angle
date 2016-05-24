import angular from 'angular';
import { AppHeaderComponent } from 'app/layout/app-header.component';
import SearchBarModule from 'app/commons/search-bar.component';

export default angular.module('jsFatigueApp.layout', [ SearchBarModule.name ])
.component('appHeader', AppHeaderComponent);

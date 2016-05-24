import angular from 'angular';
import { TechListComponent } from 'app/tech/tech-list.component';
import { TechListService } from 'app/tech/tech.service';

export default angular.module('jsFatigueApp.tech', [])
.component('techList', TechListComponent)
.service('TechListService', TechListService);

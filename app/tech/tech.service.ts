///<reference path="../typings/ng-decorators.d.ts"/>
///<reference path="../../typings/index.d.ts"/>


import { Injectable } from 'ng-decorators/Injectable';
import { ITech } from './ITech';

@Injectable()
export class TechListService {

    $http : ng.IHttpService
    
    constructor($http : ng.IHttpService) {
        this.$http = $http;
    }

    getTechs() : ng.IPromise<ITech> {
        return this.$http.get('seed/techs.json').then((techs) => {
            return techs;
        });
    }
}

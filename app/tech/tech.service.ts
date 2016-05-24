import { Injectable } from 'ng-decorators/Injectable';

@Injectable()
export class TechListService {

    $http : angular.IHttpService
    
    constructor($http : angular.IHttpService) {
        this.$http = $http;
    }

    getTechs() : angular.IPromise {
        return this.$http.get('seed/techs.json').success((techs) => {
            return techs;
        });
    }
}

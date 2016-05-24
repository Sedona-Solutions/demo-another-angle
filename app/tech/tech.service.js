import { Injectable } from 'ng-decorators/Injectable';

@Injectable()
export class TechListService {

    constructor($http) {
        this.$http = $http;
    }

    getTechs() {
        return this.$http.get('seed/techs.json').success((techs) => {
            return techs;
        });
    }
}

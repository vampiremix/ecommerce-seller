import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { historyModel } from './history.model';

@Injectable()
export class HistoryService {
    constructor(public http: Http) { }

    getData(): Promise<historyModel> {
        return this.http.get('./assets/example_data/History.json')
            .toPromise()
            .then(response => response.json() as historyModel)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}




import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CreateProductService {
    constructor(public http: Http) { }

    saveData() {
        return this.http.get('https://www.heroku.com/save-product-service')
            .toPromise()
            .then(response => {
                console.log(response);
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}

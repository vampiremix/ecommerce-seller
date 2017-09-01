import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CreateProductService {
    apiUrl: string = 'https://ecommerce-server.herokuapp.com/';
    headers = new Headers({
        'Content-Type': 'application/json'
    });

    optionsURL = new RequestOptions({
        headers: this.headers
    });
    constructor(public http: Http) { }

    saveData(data) {
        return this.http.post('https://cloudinary01.herokuapp.com/api/products', { data: data })
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

    getCategory(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + 'api/categoryMasters').map(res => {
                return res.json();
            }).subscribe(data => {
                resolve(data);
            }, (error) => {
                reject(error);
            });
        })
    }
}

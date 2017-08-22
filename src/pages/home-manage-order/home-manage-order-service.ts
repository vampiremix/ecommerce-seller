import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import {homeModel} from './home-manage-order-model';
/*
  Generated class for the HomeManageOrderServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HomeManageOrderServiceProvider {

  constructor(public http: Http) {
    console.log('Hello HomeManageOrderServiceProvider Provider');
  }

  getOrder(): Promise<homeModel> {
    return this.http.get('./assets/example_data/home-manage-order.json')
        .toPromise()
        .then(response => response.json() as homeModel)
        .catch(this.handleError);
} 

private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
}

}


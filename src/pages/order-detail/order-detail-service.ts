import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {orderDetailModel} from './order-detail-model';

/*
  Generated class for the OrderDetailServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class OrderDetailServiceProvider {

  constructor(public http: Http) {
    console.log('Hello OrderDetailServiceProvider Provider');
  }
  getorderDetail(): Promise<orderDetailModel> {
    return this.http.get('./assets/example_data/order-detail.json')
        .toPromise()
        .then(response => response.json() as orderDetailModel)
        .catch(this.handleError);
} 

private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
}

}

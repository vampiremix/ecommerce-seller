import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { productDetailModel } from "./product-detail-model";

/*
  Generated class for the ProductDetailServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProductDetailServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ProductDetailServiceProvider Provider');
  }
  getproductDetail(): Promise<productDetailModel> {
    return this.http.get('./assets/example_data/product-detail.json')
        .toPromise()
        .then(response => response.json() as productDetailModel)
        .catch(this.handleError);
}
private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

}

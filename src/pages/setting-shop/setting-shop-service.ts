import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { settingShopModel } from "./setting-shop-model";

/*
  Generated class for the SettingShopServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SettingShopServiceProvider {

  constructor(public http: Http) {
    console.log('Hello SettingShopServiceProvider Provider');
  }
  getsettingShop(): Promise<settingShopModel> {
    return this.http.get('./assets/example_data/setting-shop.json')
        .toPromise()
        .then(response => response.json() as settingShopModel)
        .catch(this.handleError);
}
private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}
}

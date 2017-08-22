import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { settingUserModel } from "./setting-user-model";
/*
  Generated class for the SettingUserServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SettingUserServiceProvider {

  constructor(public http: Http) {
    console.log('Hello SettingUserServiceProvider Provider');
  }
  getsettingUser(): Promise<settingUserModel> {
    return this.http.get('./assets/example_data/setting-user.json')
        .toPromise()
        .then(response => response.json() as settingUserModel)
        .catch(this.handleError);
}
private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

}

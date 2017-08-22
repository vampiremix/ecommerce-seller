import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 import { settingUserModel } from "./setting-user-model";
 import {  SettingUserServiceProvider} from "./setting-user-service";
/**
 * Generated class for the SettingUserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-setting-user',
  templateUrl: 'setting-user.html',
})
export class SettingUserPage {
  settingUser : settingUserModel = new settingUserModel();
  constructor(public navCtrl: NavController, public navParams: NavParams,public settingUserService:SettingUserServiceProvider) {
    this.settingUserService
    .getsettingUser()
    .then(data => {
      this.settingUser = data;
      console.log(this.settingUser);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingUserPage');
  }

}

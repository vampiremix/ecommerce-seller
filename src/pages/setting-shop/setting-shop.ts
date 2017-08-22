import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { settingShopModel } from "./setting-shop-model";
import { SettingShopServiceProvider } from "./setting-shop-service";

/**
 * Generated class for the SettingShopPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-setting-shop',
  templateUrl: 'setting-shop.html',
})
export class SettingShopPage {
  settingShop : settingShopModel = new settingShopModel();

  constructor(public navCtrl: NavController, public navParams: NavParams,public settingShopService:SettingShopServiceProvider) {
    this.settingShopService
    .getsettingShop()
    .then(data => {
      this.settingShop = data;
      console.log(this.settingShop);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingShopPage');
  }

}

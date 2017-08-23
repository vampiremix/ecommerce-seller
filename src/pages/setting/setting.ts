import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HistoryPage } from '../history/history';
import { SettingShopPage } from "../setting-shop/setting-shop";
import { SettingUserPage } from "../setting-user/setting-user";
import { LoginPage } from "../login/login";

/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})

export class SettingPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  HistoryPage() {
    this.navCtrl.push(HistoryPage);
  }

  SettingShopPage() {
    this.navCtrl.push(SettingShopPage);
  }
  SettingUserPage() {
    this.navCtrl.push(SettingUserPage);
  }

  onLogOut() {
    window.localStorage.clear();
    this.app.getRootNav().setRoot(LoginPage);
  }
}

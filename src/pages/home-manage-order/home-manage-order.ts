import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { homeModel } from "./home-manage-order-model";
import { HomeManageOrderServiceProvider } from "./home-manage-order-service";

/**
 * Generated class for the HomeManageOrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home-manage-order',
  templateUrl: 'home-manage-order.html',
})
export class HomeManageOrderPage {
  orders : homeModel = new homeModel();

  constructor(public navCtrl: NavController, public navParams: NavParams ,public homeService:HomeManageOrderServiceProvider) {
    this.homeService
    .getOrder()
    .then(data => {
      this.orders = data;
      console.log(data);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeManageOrderPage');
  }

}

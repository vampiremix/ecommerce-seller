import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { orderDetailModel } from "./order-detail-model";
import {OrderDetailServiceProvider} from './order-detail-service';

/**
 * Generated class for the OrderDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {
  orderdetail : orderDetailModel = new orderDetailModel();

  constructor(public navCtrl: NavController, public navParams: NavParams,public orderDetailService:OrderDetailServiceProvider) {
    this.orderDetailService
    .getorderDetail()
    .then(data => {
      this.orderdetail = data;
      console.log(data);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailPage');
  }

}





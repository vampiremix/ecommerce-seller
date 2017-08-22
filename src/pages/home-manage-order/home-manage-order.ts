import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController,AlertController } from 'ionic-angular';

import { homeModel } from "./home-manage-order-model";
import { HomeManageOrderServiceProvider } from "./home-manage-order-service";
import { OrderDetailPage } from "../order-detail/order-detail";

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
  confirm : any;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public homeService:HomeManageOrderServiceProvider,public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController) {
    this.homeService
    .getOrder()
    .then(data => {
      this.orders = data;
      console.log(data);
    });

    this.confirm = this.alertCtrl.create({
      title: 'การแจ้งเตือน',
      message: 'ยืนยันการสั่งซื้อสินค้า',
      buttons: [
        {
          text: 'ยกเลิก',
          
          handler: () => {
            // this.confirm.dismiss();
            console.log('Disagree clicked');
          }
        },
        {
          text: 'ยืนยัน',
          handler: () => {
            this.confirm.dismiss();
            console.log('Agree clicked');
          }
        }
      ]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeManageOrderPage');
  }
// buttonsข้างล่าง
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
     
      buttons: [
        {
          text: 'ดูรายละเอียดสินค้า',
          handler: () => {
            // console.log('Destructive clicked');
            this.navCtrl.push(OrderDetailPage);
          }
        },{
          text: 'ยืนยันการสั่งซื้อสินค้า',
          handler: () => {
            // this.confirm.present();
            confirm("ยืนยันการสั่งซื้อสินค้า");
            // this.showConfirm();
            console.log('Archive clicked');
          }
        },{
          text: 'ยกเลิก',
          role: 'destructive',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  // clickconfirm
  // showConfirm() {
    
    // this.confirm.present();
  // }


}

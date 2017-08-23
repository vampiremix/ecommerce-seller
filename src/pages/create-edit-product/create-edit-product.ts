import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-create-edit-product',
  templateUrl: 'create-edit-product.html',
})
export class CreateEditProductPage {
  private product: any = {};

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  saveProduct() {
    console.log(this.product);
  }

  uploadImgs() {
    this.product.imgs = [];
  }

}

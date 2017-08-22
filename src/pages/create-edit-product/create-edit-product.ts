import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-create-edit-product',
  templateUrl: 'create-edit-product.html',
})
export class CreateEditProductPage {
  private product: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  saveProduct() {
    console.log(this.product);
  }

  uploadImgs() {
    this.product.imgs = [];
  }

}

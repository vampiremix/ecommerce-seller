import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProductlistService } from "./manage-product.service";
import { ProdLists } from "./manage-product.model";
import { CreateEditProductPage } from "../create-edit-product/create-edit-product";

/**
 * Generated class for the ManageProductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-manage-product',
  templateUrl: 'manage-product.html',
})
export class ManageProductPage {
  public pro: ProdLists = new ProdLists;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public productlistService: ProductlistService,
    public modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageProductPage');
    this.productlistService.getData().then(data => {
      this.pro = data;
    });
  }

  addProduct() {
    let modal = this.modalCtrl.create(CreateEditProductPage);
    modal.present();
    // this.navCtrl.push(CreateEditProductPage);
  }

}

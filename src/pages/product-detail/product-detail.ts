import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { productDetailModel } from "./product-detail-model";
import { ProductDetailServiceProvider } from "./product-detail-service";

/**
 * Generated class for the ProductDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  productDetail : productDetailModel = new productDetailModel();
  constructor(public navCtrl: NavController, public navParams: NavParams,public productDetailService:ProductDetailServiceProvider) {
    this.productDetailService
    .getproductDetail()
    .then(data => {
      this.productDetail = data;
      console.log(this.productDetail);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }

}

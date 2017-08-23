import { Component, Input } from '@angular/core';
import { ProdList } from "./list-product.model";
import { Platform, ActionSheetController, NavController, NavParams } from "ionic-angular";
import { ProductDetailPage } from "../../pages/product-detail/product-detail";

/**
 * Generated class for the ListProductComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-product',
  templateUrl: 'list-product.html'
})
export class ListProductComponent {

  @Input() productList: ProdList;
  prods: any;

  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    // this.initializeItems();
  }

  openMenu(i) {
    let actionSheet = this.actionsheetCtrl.create({
      // title: 'Albums',
      cssClass: 'action-sheets',
      buttons: [
        {
          text: 'ดูรายละเอียดสินค้า',
          // icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
            this.openProductDetailPage();
          }
        },
        {
          text: 'แก้ไขสินค้า',
          // icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'ลบสินค้า',
          role: 'destructive',
          // icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            // console.log('ลบสินค้า'+ JSON.stringify(prod) );
            this.removeitem(i);
            alert('ต้องการลบรายการสินค้าา?');
          }
        },
        {
          text: 'ยกเลิก',
          role: 'cancel', // will always sort to be on the bottom
          // icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  removeitem(i) {
    this.productList.product.splice(i, 1);
  }

  // initializeItems() {
  //   console.log(this.productList);
  //   // this.prods = this.productList.product;

  // }

  getItems(ev) {
    // Reset items back to all of the items
    // this.initializeItems();
    // set val to the value of the ev target
    var val = ev.target.value;

    if (!this.prods) {
      this.prods = this.productList.product;
    }
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.productList.product = this.prods.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.productList.product = this.prods;
    }
  }
  openProductDetailPage() {
    this.navCtrl.push(ProductDetailPage);
  }
}

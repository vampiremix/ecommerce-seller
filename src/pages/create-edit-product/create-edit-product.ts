import { CategoryListModel, CategoryModel } from './create-edit-product.model';
import { CreateProductService } from './create-product.service';
import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-create-edit-product',
  templateUrl: 'create-edit-product.html',
})
export class CreateEditProductPage {
  private product: any = {};
  private images: Array<any> = [];
  category: CategoryListModel = new CategoryListModel();
  cate: CategoryListModel = new CategoryListModel();
  subcate: CategoryListModel = new CategoryListModel();
  selectedCate: CategoryModel = new CategoryModel();
  selectedSubCate: CategoryModel = new CategoryModel();
  constructor(public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public createProductService: CreateProductService,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.getCate();
  }

  getCate() {
    let loading = this.loadingCtrl.create();
    loading.present();
    this.createProductService.getCategory().then(res => {
      this.category.categorys = res;
      this.cate.categorys = this.category.categorys.filter((obj) => {
        return obj.parent === "";
      });
      loading.dismiss();
    }, err => {
      loading.dismiss();
    });
  }

  selected() {
    this.subcate.categorys = this.category.categorys.filter((obj) => {
      return obj.parent === this.selectedCate._id;
    });
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  setImage(e){
    this.images = e;
  }

  saveProduct() {
    
  }

}

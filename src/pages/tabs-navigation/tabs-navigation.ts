import { SettingPage } from '../setting/setting';
import { ManageProductPage } from '../manage-product/manage-product';
import { HomeManageOrderPage } from '../home-manage-order/home-manage-order';
import { Component } from '@angular/core';


@Component({
  selector: 'tabs-navigation',
  templateUrl: 'tabs-navigation.html'
})
export class TabsNavigationPage {
  tab1Root: any;
  tab2Root: any;
  tab3Root: any;

  constructor() {
    this.tab1Root = HomeManageOrderPage;
    this.tab2Root = ManageProductPage;
    this.tab3Root = SettingPage;
  }
}

import { SettingUserPage } from '../setting-user/setting-user';
import { SettingShopPage } from '../setting-shop/setting-shop';
import { HistoryPage } from '../history/history';
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
  tab4Root: any;
  tab5Root: any;

  constructor() {
    this.tab1Root = HomeManageOrderPage;
    this.tab2Root = ManageProductPage;
    this.tab3Root = HistoryPage;
    this.tab4Root = SettingShopPage;
    this.tab5Root = SettingPage;
  }
}

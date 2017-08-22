import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingShopPage } from './setting-shop';

@NgModule({
  declarations: [
    SettingShopPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingShopPage),
  ],
  exports: [
    SettingShopPage
  ]
})
export class SettingShopPageModule {}

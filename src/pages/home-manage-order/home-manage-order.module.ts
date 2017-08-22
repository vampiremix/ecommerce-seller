import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeManageOrderPage } from './home-manage-order';

@NgModule({
  declarations: [
    HomeManageOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeManageOrderPage),
  ],
  exports: [
    HomeManageOrderPage
  ]
})
export class HomeManageOrderPageModule {}

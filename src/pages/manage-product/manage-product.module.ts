import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageProductPage } from './manage-product';

@NgModule({
  declarations: [
    ManageProductPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageProductPage),
  ],
  exports: [
    ManageProductPage
  ]
})
export class ManageProductPageModule {}

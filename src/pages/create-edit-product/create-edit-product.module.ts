import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateEditProductPage } from './create-edit-product';

@NgModule({
  declarations: [
    CreateEditProductPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateEditProductPage),
  ],
  exports: [
    CreateEditProductPage
  ]
})
export class CreateEditProductPageModule {}

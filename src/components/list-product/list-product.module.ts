import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ListProductComponent } from './list-product';

@NgModule({
  declarations: [
    ListProductComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ListProductComponent
  ]
})
export class ListProductComponentModule {}

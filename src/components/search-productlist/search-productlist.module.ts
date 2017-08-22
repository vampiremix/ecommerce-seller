import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SearchProductlistComponent } from './search-productlist';

@NgModule({
  declarations: [
    SearchProductlistComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    SearchProductlistComponent
  ]
})
export class SearchProductlistComponentModule {}

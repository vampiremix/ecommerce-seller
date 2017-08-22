import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HistoryComponent } from './history';

@NgModule({
  declarations: [
    HistoryComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    HistoryComponent
  ]
})
export class HistoryComponentModule {}

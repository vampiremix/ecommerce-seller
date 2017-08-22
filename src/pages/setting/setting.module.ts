import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingPage } from './setting';
import { HistoryPage } from '../history/history';
@NgModule({
  declarations: [
    SettingPage,
    HistoryPage
  ],
  imports: [
    IonicPageModule.forChild(SettingPage),
  ],
  exports: [
    SettingPage,
    HistoryPage
  ]
})
export class SettingPageModule {}

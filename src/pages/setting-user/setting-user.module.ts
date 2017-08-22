import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingUserPage } from './setting-user';

@NgModule({
  declarations: [
    SettingUserPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingUserPage),
  ],
  exports: [
    SettingUserPage
  ]
})
export class SettingUserPageModule {}

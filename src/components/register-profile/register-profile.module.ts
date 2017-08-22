import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RegisterProfileComponent } from './register-profile';

@NgModule({
  declarations: [
    RegisterProfileComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    RegisterProfileComponent
  ]
})
export class RegisterProfileComponentModule {}

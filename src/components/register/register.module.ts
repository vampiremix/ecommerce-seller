import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RegisterComponent } from './register';

@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterComponentModule {}

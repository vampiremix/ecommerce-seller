import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { TabsNavigationPage } from '../../pages/tabs-navigation/tabs-navigation';

/**
 * Generated class for the RegisterComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'register',
  templateUrl: 'register.html'
})
export class RegisterComponent {
  signup: FormGroup;
  text: string;
  main_page: { component: any };
  loading: any;

  constructor(
    public loadingCtrl: LoadingController,
    public nav: NavController,
    public modal: ModalController
  ) {

    this.main_page = { component: TabsNavigationPage };
    this.signup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required)
    });
  }


  doSignup() {
    this.nav.setRoot(this.main_page.component);
      }
}

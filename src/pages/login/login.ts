import { UserProvider } from '../../providers/user/user';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';

import { LoginService } from "./login.service";

// import { FacebookLoginService } from '../facebook-login/facebook-login.service';
// import { GoogleLoginService } from '../google-login/google-login.service';
// import { TwitterLoginService } from '../twitter-login/twitter-login.service';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: FormGroup;
  main_page: { component: any };
  loading: any;


  constructor(
    public nav: NavController,
    // public facebookLoginService: FacebookLoginService,
    // public googleLoginService: GoogleLoginService,
    // public twitterLoginService: TwitterLoginService,
    public loadingCtrl: LoadingController,
    private loginSer: LoginService,
    private userpro: UserProvider
  ) {
    this.main_page = { component: TabsNavigationPage };

    this.login = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  doLogin() {
    // let loading = this.loadingCtrl.create({
    //   content: 'Please wait...'
    // });
    // loading.present();
    // let user = { "username": this.login.value.username, "password": this.login.value.password }
    // this.loginSer.logingin(user).then(data => {

    //   this.userpro.user = data;
    //   console.log(this.userpro.user);
    //   loading.dismiss();
    //   this.nav.setRoot(this.main_page.component);
    // }).catch(err => {
    //   alert("Username or password is not correct");
    //   loading.dismiss();
    // });

    // Loogin Local
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    let user = { "username": this.login.value.username, "password": this.login.value.password }
    this.loginSer.logingin(user).then(data => {
      this.userpro.user = data;
      console.log(this.userpro.user);
      loading.dismiss();
      this.nav.setRoot(this.main_page.component);
    }).catch(err => {
      alert("Username or password is not correct");
      loading.dismiss();
    });

  }



}

import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { TermsOfServicePage } from '../terms-of-service/terms-of-service';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { Slides } from 'ionic-angular';
import { signupService } from "../signup/signup.service";

// import { FacebookLoginService } from '../facebook-login/facebook-login.service';
// import { GoogleLoginService } from '../google-login/google-login.service';
// import { TwitterLoginService } from '../twitter-login/twitter-login.service';

@Component({
  selector: 'signup-page',
  templateUrl: 'signup.html'
})
export class SignupPage {
  @ViewChild(Slides) slides: Slides;
  signup: FormGroup;
  main_page: { component: any };
  loading: any;

  constructor(
    public nav: NavController,
    public modal: ModalController,
    public signupService: signupService,
    // public facebookLoginService: FacebookLoginService,
    // public googleLoginService: GoogleLoginService,
    // public twitterLoginService: TwitterLoginService,
    public loadingCtrl: LoadingController
  ) {
    this.main_page = { component: TabsNavigationPage };

    this.signup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      tel: new FormControl('', Validators.required),
      shopName: new FormControl('', Validators.required),
      shopaddress: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required)
    });
  }

  NextSignup() {
    this.slides.slideNext();
  }
  Next2Signup() {
    this.slides.slideNext();
  }

  doSignup() {
    let data = {
      username: this.signup.value.username,
      firstName: this.signup.value.firstName,
      lastName: this.signup.value.lastName,
      email: this.signup.value.email,
      tel: this.signup.value.tel,
      password: this.signup.value.password,
      shopName: this.signup.value.shopName,
      shopaddress: this.signup.value.shopaddress
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.signup.value.email)) {
      if (this.signup.value.password.length < 7) {
        alert('Please input password at less 8 character');
      } else if (this.signup.value.password !== this.signup.value.confirm_password) {
        alert("Passwords do not match")
      } else {
        this.signupService.signup(data).then(res => {
          localStorage.setItem('user', res);
          this.nav.setRoot(this.main_page.component);
        }).catch(err => {
          let error = JSON.parse(err._body);
          alert(error.message.replace("11000 duplicate key error collection: mean-secret.users index:", ""));
        });
      }
    } else {
      alert('email incorrect')
    }
    console.log(this.signup.value);
    //this.nav.setRoot(this.main_page.component);
  }

  doFacebookSignup() {
    this.loading = this.loadingCtrl.create();
    // Here we will check if the user is already logged in
    // because we don't want to ask users to log in each time they open the app
    let env = this;

    // this.facebookLoginService.getFacebookUser()
    // .then(function(data) {
    //    // user is previously logged with FB and we have his data we will let him access the app
    //   env.nav.setRoot(env.main_page.component);
    // }, function(error){
    //   //we don't have the user data so we will ask him to log in
    //   env.facebookLoginService.doFacebookLogin()
    //   .then(function(res){
    //     env.loading.dismiss();
    //     env.nav.setRoot(env.main_page.component);
    //   }, function(err){
    //     console.log("Facebook Login error", err);
    //     env.loading.dismiss();
    //   });
    // });
  }

  doTwitterSignup() {
    this.loading = this.loadingCtrl.create();
    // Here we will check if the user is already logged in
    // because we don't want to ask users to log in each time they open the app
    let env = this;

    // this.twitterLoginService.getTwitterUser()
    // .then(function(data) {
    //    // user is previously logged with FB and we have his data we will let him access the app
    //   env.nav.setRoot(env.main_page.component);
    // }, function(error){
    //   //we don't have the user data so we will ask him to log in
    //   env.twitterLoginService.doTwitterLogin()
    //   .then(function(res){
    //     env.loading.dismiss();
    //     env.nav.setRoot(env.main_page.component);
    //   }, function(err){
    //     console.log("Facebook Login error", err);
    //     env.loading.dismiss();
    //   });
    // });
  }

  doGoogleSignup() {
    this.loading = this.loadingCtrl.create();

    // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app
    let env = this;

    // this.googleLoginService.trySilentLogin()
    // .then(function(data) {
    //    // user is previously logged with Google and we have his data we will let him access the app
    //   env.nav.setRoot(env.main_page.component);
    // }, function(error){
    //   //we don't have the user data so we will ask him to log in
    //   env.googleLoginService.doGoogleLogin()
    //   .then(function(res){
    //     env.loading.dismiss();
    //     env.nav.setRoot(env.main_page.component);
    //   }, function(err){
    //     console.log("Google Login error", err);
    //     env.loading.dismiss();
    //   });
    // });
  }

  showTermsModal() {
    let modal = this.modal.create(TermsOfServicePage);
    modal.present();
  }

  showPrivacyModal() {
    let modal = this.modal.create(PrivacyPolicyPage);
    modal.present();
  }

}

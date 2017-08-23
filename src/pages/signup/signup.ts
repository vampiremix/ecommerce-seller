import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { TermsOfServicePage } from '../terms-of-service/terms-of-service';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { Slides } from 'ionic-angular';
import { signupService } from "../signup/signup.service";
import { DatasendModel } from "./signup.model";

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
  signupprofile: FormGroup;
  signupshop: FormGroup;
  main_page: { component: any };
  loading: any;
  dataSend: DatasendModel = new DatasendModel();

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
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required)
    });

    this.signupprofile = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      tel: new FormControl('', Validators.required)
    });

    this.signupshop = new FormGroup({
      shopName: new FormControl('', Validators.required)
    });
  }

  BacksignupProfile() {
    this.slides.slidePrev();
  }

  BacksignupShop() {
    this.slides.slidePrev();
  }


  NextSignup() {
    this.dataSend.username = this.signup.value.username;
    this.dataSend.password = this.signup.value.password;
    this.dataSend.confirm_password = this.signup.value.confirm_password;
    console.log(this.dataSend);
    if (this.dataSend.password.length < 7) {
      alert('Please input password at less 8 character');
    } else if (this.dataSend.password !== this.dataSend.confirm_password) {
      alert("Passwords do not match");
    } else {
      this.slides.slideNext();
    }
  }
  Next2Signup() {
    this.dataSend.firstName = this.signupprofile.value.firstName;
    this.dataSend.lastName = this.signupprofile.value.lastName;
    this.dataSend.email = this.signupprofile.value.email;
    this.dataSend.tel = this.signupprofile.value.tel;
    console.log(this.dataSend);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.dataSend.email)) {
      this.slides.slideNext();
    } else {
      alert('email incorrect');
    }
  }

  doSignup() {
    this.dataSend.shop.name = this.signupshop.value.shopName;
    this.nav.setRoot(this.main_page.component);
    console.log(this.dataSend);

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

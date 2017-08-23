import { signupService } from '../pages/signup/signup.service';
import { SettingUserPage } from '../pages/setting-user/setting-user';
import { SettingShopPage } from '../pages/setting-shop/setting-shop';
import { ListProductComponent } from '../components/list-product/list-product';
import { HistoryPage } from '../pages/history/history';
import { SettingPage } from '../pages/setting/setting';
import { CreateEditProductPage } from '../pages/create-edit-product/create-edit-product';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { ManageProductPage } from '../pages/manage-product/manage-product';
import { OrderDetailPage } from '../pages/order-detail/order-detail';
import { HomeManageOrderPage } from '../pages/home-manage-order/home-manage-order';
// package module(s)
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

//ionic UI components
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeStorage } from '@ionic-native/native-storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { Keyboard } from '@ionic-native/keyboard';
import { Geolocation } from '@ionic-native/geolocation';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { AdMobFree } from '@ionic-native/admob-free';
import { AppRate } from '@ionic-native/app-rate';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
import { EmailComposer } from '@ionic-native/email-composer';


// pages
import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { TermsOfServicePage } from '../pages/terms-of-service/terms-of-service';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';
import { TabsNavigationPage } from '../pages/tabs-navigation/tabs-navigation';
import { ListingPage } from '../pages/listing/listing';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ProfilePage } from '../pages/profile/profile';


//components
import { PreloadImage } from '../components/preload-image/preload-image';
import { BackgroundImage } from '../components/background-image/background-image';
import { VideoPlayerModule } from '../components/video-player/video-player.module';
import { ValidatorsModule } from '../components/validators/validators.module';
import { ShowHideContainer } from '../components/show-hide-password/show-hide-container';
import { ShowHideInput } from '../components/show-hide-password/show-hide-input';
import { TopbarComponent } from "../components/topbar/topbar";
//page services
import { ListingService } from '../pages/listing/listing.service';
import { ProfileService } from '../pages/profile/profile.service';
import { NotificationsService } from '../pages/notifications/notifications.service';


//providers
import { LanguageService } from '../providers/language/language.service';
import { RegisterComponent } from '../components/register/register';
import { RegisterProfileComponent } from '../components/register-profile/register-profile';
import { RegisterShopComponent } from '../components/register-shop/register-shop';
import { HistoryComponent } from '../components/history/history';
import { HomeManageOrderServiceProvider } from '../pages/home-manage-order/home-manage-order-service';
import { SettingShopServiceProvider } from '../pages/setting-shop/setting-shop-service';
import { SettingUserServiceProvider } from '../pages/setting-user/setting-user-service';
import { ProductDetailServiceProvider } from '../pages/product-detail/product-detail-service';
import { HistoryService } from '../pages/history/history.service';
import { LoginService } from '../pages/login/login.service';
import { OrderDetailServiceProvider } from '../pages/order-detail/order-detail-service';
import { ProductlistService } from "../pages/manage-product/manage-product.service";



export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    WalkthroughPage,
    LoginPage,
    SignupPage,
    TermsOfServicePage,
    PrivacyPolicyPage,
    TabsNavigationPage,
    ListingPage,
    NotificationsPage,
    ProfilePage,
    HomeManageOrderPage,
    OrderDetailPage,
    ManageProductPage,
    ProductDetailPage,
    CreateEditProductPage,
    SettingPage,
    HistoryPage,
    SettingShopPage,
    SettingUserPage,    

    PreloadImage,
    BackgroundImage,
    ListProductComponent,
    RegisterComponent,
    RegisterProfileComponent,
    RegisterShopComponent,
    HistoryComponent,
    ShowHideContainer,
    ShowHideInput,
    TopbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    VideoPlayerModule,
    ValidatorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WalkthroughPage,
    LoginPage,
    SignupPage,
    TermsOfServicePage,
    PrivacyPolicyPage,
    TabsNavigationPage,
    ListingPage,
    NotificationsPage,
    ProfilePage,
    HomeManageOrderPage,
    OrderDetailPage,
    ManageProductPage,
    ProductDetailPage,
    CreateEditProductPage,
    SettingPage,
    HistoryPage,
    SettingShopPage,
    SettingUserPage,
    ListProductComponent
    
  ],
  providers: [
    ListingService,
    ProfileService,
    NotificationsService,
    LoginService,
    HistoryService,
    signupService,
    // FacebookLoginService,
    // GoogleLoginService,
    // TwitterLoginService,
    // GoogleMapsService,
    LanguageService,

    SplashScreen,
    StatusBar,
    SocialSharing,
    NativeStorage,
    InAppBrowser,
    Facebook,
    GooglePlus,
    Keyboard,
    Geolocation,
    TwitterConnect,
    AdMobFree,
    AppRate,
    ImagePicker,
    Crop,
    EmailComposer,

    HomeManageOrderServiceProvider,
    SettingShopServiceProvider,
    SettingUserServiceProvider,
    ProductDetailServiceProvider,
    OrderDetailServiceProvider,
    ProductlistService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoryService } from "./history.service";
import { historyModel } from "./history.model";
/**
 * Generated class for the HistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  historys: historyModel = new historyModel();
  history:string = 'paid';
  constructor(public navCtrl: NavController, public navParams: NavParams, public hisSer: HistoryService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
    this.hisSer.getData().then(data => {
      this.historys = data;
      // this.history.paid = data.paid;
      // this.
      console.log(data);
    })
  }

}

import { Component } from '@angular/core';
import { Platform, ActionSheetController, AlertController } from "ionic-angular";

/**
 * Generated class for the ActionSheetsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'action-sheets',
  templateUrl: 'action-sheets.html'
})
export class ActionSheetsComponent {


  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public alerCtrl: AlertController
  ) {

  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      // title: 'Albums',
      cssClass: 'action-sheets',
      buttons: [
        {
          text: 'ดูรายละเอียดสินค้า',
          // icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'แก้ไขสินค้า',
          // icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'ลบสินค้า',
          role: 'destructive',
          // icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
            alert('ยืนยันการลบสินค้า!');            
          }
        },
        {
          text: 'ยกเลิก',
          role: 'cancel', // will always sort to be on the bottom
          // icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}

import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * Generated class for the HistoryComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'history',
  templateUrl: 'history.html'
})
export class HistoryComponent {
  @Input() historyData: any;
  @Input() amount: any;
  text: string;

  constructor() {
    console.log('Hello HistoryComponent Component');
    this.text = 'Hello World';
  }

}

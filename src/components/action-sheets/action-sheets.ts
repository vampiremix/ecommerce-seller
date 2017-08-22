import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello ActionSheetsComponent Component');
    this.text = 'Hello World';
  }

}

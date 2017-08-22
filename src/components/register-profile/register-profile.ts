import { Component } from '@angular/core';

/**
 * Generated class for the RegisterProfileComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'register-profile',
  templateUrl: 'register-profile.html'
})
export class RegisterProfileComponent {

  text: string;

  constructor() {
    console.log('Hello RegisterProfileComponent Component');
    this.text = 'Hello World';
  }

}

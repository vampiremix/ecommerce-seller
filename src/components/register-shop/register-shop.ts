import { Component } from '@angular/core';

/**
 * Generated class for the RegisterShopComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'register-shop',
  templateUrl: 'register-shop.html'
})
export class RegisterShopComponent {

  text: string;

  constructor() {
    console.log('Hello RegisterShopComponent Component');
    this.text = 'Hello World';
  }

}

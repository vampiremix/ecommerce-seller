import { Component } from '@angular/core';

/**
 * Generated class for the SearchProductlistComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'search-productlist',
  templateUrl: 'search-productlist.html'
})
export class SearchProductlistComponent {

  text: string;

  constructor() {
    console.log('Hello SearchProductlistComponent Component');
    this.text = 'Hello World';
  }

}

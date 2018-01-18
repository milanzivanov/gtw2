import { Component } from '@angular/core';
import { RootObject } from './weather-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: RootObject[] = [];



  // 2 header -- output --> app-component
  receiveDataFromRoot(value: RootObject) {

    this.items.push(value);

    console.log('app-component ' + value.city.id);
  }

}

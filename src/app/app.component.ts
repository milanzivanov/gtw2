import { Component } from '@angular/core';
import { RootObject } from './weather-interface';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // (rootEventParent)="receiveDataFromRoot($event)"

  // 3
  main: RootObject;

  // 2 header -- output --> app-component
  receiveDataFromRoot(value: RootObject) {
    this.main = value;
    console.log('app-component ' + value.city.id);
  }

}

import { Component } from '@angular/core';
import { RootObject } from './weather-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  main: RootObject;

  // aca

  newRootObject(value: RootObject) {
    this.main = value;
    console.log('app component');
    // console.log(this.main);

  }

}

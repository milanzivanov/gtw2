import { Component } from '@angular/core';
import { RootObject } from './weather-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  message: string;
  receiveMessage($event) {
    this.message = $event;
  }

}

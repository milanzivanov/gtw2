import { Component } from '@angular/core';
import { CityInfo } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // 555
  itemsApp: CityInfo[] = [];

  // 2 header -- output --> app-component
  onCityAdded(value: CityInfo) {
    this.itemsApp.push(value);
  }

  onCityRemoved(value: CityInfo) {
    const i = this.itemsApp.indexOf(value);
    this.itemsApp.splice(i, 1);
    console.log('test remove app component');

  }

}

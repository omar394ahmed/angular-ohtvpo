import { Component } from '@angular/core';

import { TestData } from './data/test.data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Medium';

  cities = TestData;
}

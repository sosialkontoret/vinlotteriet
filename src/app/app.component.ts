import { Component } from '@angular/core';
import { environment } from '@env';

@Component({
  selector: 'sk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'wine-lottery';
  version: string;

  constructor() {
    this.version = environment.version;
  }
}

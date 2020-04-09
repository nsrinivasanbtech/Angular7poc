import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allowNewServer = false;
  title = 'angular-project';
  constructor() {
    setInterval(() => {
      this.allowNewServer = true;
    }, 5000);
  }
}

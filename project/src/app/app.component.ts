import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project';
  isNavbarClicked = false;

  navbarClick() {
    this.isNavbarClicked = !this.isNavbarClicked;
  }
}

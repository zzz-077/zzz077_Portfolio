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

    if (this.isNavbarClicked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  linksClick() {
    this.isNavbarClicked = false;
    document.body.style.overflow = '';
  }
}

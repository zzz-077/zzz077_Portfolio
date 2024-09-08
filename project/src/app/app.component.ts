import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project';
  isNavbarClicked = false;
  isScrolled = false;
  constructor() {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (window.scrollY >= 200) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  navbarClick() {
    this.isNavbarClicked = !this.isNavbarClicked;
  }
}

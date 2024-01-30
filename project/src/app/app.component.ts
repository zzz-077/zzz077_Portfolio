import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project';
  isNavbarClicked = false;
  isLoaded = false;
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

  ngOnInit() {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.body.style.overflow = 'visible';
      this.isLoaded = true;
    }, 3000);
  }

  navbarClick() {
    this.isNavbarClicked = !this.isNavbarClicked;
  }
}

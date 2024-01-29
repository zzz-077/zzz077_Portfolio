import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project';
  isNavbarClicked = false;
  isLoaded = false;
  constructor() {}

  ngOnInit() {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.body.style.overflow = 'visible';
      this.isLoaded = true;
      console.log(this.isLoaded);
    }, 3000);
  }

  navbarClick() {
    this.isNavbarClicked = !this.isNavbarClicked;
  }
}

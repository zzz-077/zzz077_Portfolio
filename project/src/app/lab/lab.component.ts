import { Component } from '@angular/core';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css'],
})
export class LabComponent {
  linkId = 0;
  imgData = [
    {
      id: 1,
      img: '/assets/siteN1.png',
    },
    {
      id: 2,
      img: '/assets/siteN2.png',
    },
    {
      id: 3,
      img: '/assets/siteN3.png',
    },
    {
      id: 4,
      img: '/assets/siteN4.png',
    },
    {
      id: 5,
      img: '/assets/siteN5.png',
    },
    {
      id: 6,
      img: '/assets/siteN6.png',
    },
    {
      id: 7,
      img: '/assets/gameN1.png',
    },
    {
      id: 8,
      img: '/assets/gameN2.png',
    },
  ];

  linkMouseEnter(link: any) {
    this.linkId = link;
    console.log(link);
  }
  linkMouseLeave() {
    this.linkId = 0;
  }
}

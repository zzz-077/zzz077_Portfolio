import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css'],
})
export class LabComponent implements OnInit {
  linkId = 0;
  portfolioData = [
    {
      sites: [
        {
          id: 1,
          img: '/assets/siteN1.png',
          icon: '/assets/SiteLogoN1.png',
          name: 'Administrator site',
          href: 'https://zzz-skydash.netlify.app/',
          description: 'HTML5, CSS3, Javascript',
          responsive: true,
        },
        {
          id: 2,
          img: '/assets/siteN2.png',
          icon: '/assets/SiteLogoN2.png',
          name: 'Programing Courses site',
          href: 'https://zzz-scholar.netlify.app/',
          description: 'HTML5, CSS3, Javascript',
          responsive: true,
        },
        {
          id: 3,
          img: '/assets/siteN3.png',
          icon: '/assets/SiteLogoN3.png',
          name: 'Online Market site',
          href: 'https://zzz-077.github.io/wix.github.io/',
          description: 'HTML5, CSS3, Javascript',
          responsive: true,
        },
        {
          id: 4,
          img: '/assets/siteN4.png',
          icon: '/assets/SiteLogoN4.png',
          name: 'CSGO Esport site',
          href: 'https://masterleague.netlify.app/',
          description: 'HTML5, CSS3, Javascript, Rest API',
          responsive: true,
        },
        {
          id: 5,
          img: '/assets/siteN5.png',
          icon: '/assets/SiteLogoN5.png',
          name: 'Gym Information site',
          href: 'https://zzz-sweatworks.netlify.app/',
          description: 'HTML5, CSS3, Javascript',
          responsive: true,
        },
        {
          id: 6,
          img: '/assets/siteN6.png',
          icon: '/assets/SiteLogoN6.png',
          name: 'Social Services site',
          href: 'http://socialserviceproject.infinityfreeapp.com/index.php',
          description: 'HTML5, CSS3, Javascript, MYSQL, PHP, REST API',
          responsive: true,
        },
        {
          id: 7,
          img: '/assets/siteN7.png',
          icon: '/assets/SiteLogoN7.png',
          name: 'Car sell&buy site',
          href: 'https://versalo.vercel.app',
          description:
            'Typescript, CSS3, Angular, Firebase, Nodejs, Rxjs, REST API',
          responsive: true,
        },
        {
          id: 8,
          img: '/assets/siteN8.png',
          icon: '/assets/SiteLogoN8.png',
          name: 'Music site',
          href: 'https://nbsplv.vercel.app/',
          description: 'Typescript, CSS3, Angular, Firebase, Rxjs, REST API',
          responsive: true,
        },
        {
          id: 9,
          img: '/assets/siteN9.png',
          icon: '/assets/SiteLogoN9.png',
          name: 'CD Games site',
          href: 'https://cdmarket.netlify.app/',
          description:
            'Typescript, CSS3, Angular, Firebase, Rxjs, Ngrx, REST API',
          responsive: true,
        },
      ],
      games: [
        {
          id: 10,
          img: '/assets/gameN1.png',
          icon: '/assets/GameLogoN1.png',
          name: 'Wordli Puzzle Game',
          href: 'https://zzzwordli.netlify.app/',
          description: 'HTML5, CSS3, Javascript',
          responsive: true,
        },
        {
          id: 11,
          img: '/assets/gameN2.png',
          icon: '/assets/GameLogoN2.png',
          name: 'English Quiz Game',
          href: 'https://englishquiz-game.netlify.app/',
          description: 'HTML5, CSS3, Javascript',
          responsive: true,
        },
      ],
    },
  ];

  ngOnInit() {}

  linkMouseEnter(link: any) {
    this.linkId = link;
  }
  linkMouseLeave() {
    this.linkId = 0;
  }
}

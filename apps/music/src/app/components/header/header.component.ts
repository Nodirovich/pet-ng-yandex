import { Component, OnInit } from '@angular/core';

export interface INav {
  title: string;
  link: string;
}

@Component({
  selector: 'ya-music-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navs: INav[];
  constructor() {
    this.navs = [
      {
        title: 'Главное',
        link: '/',
      },
      {
        title: 'Подкасты и книги',
        link: '/non-music',
      },
      {
        title: 'Детям',
        link: '/children',
      },
      {
        title: 'Потоки',
        link: '/radio',
      },
      {
        title: 'Коллекция',
        link: '/playlists',
      },
    ];
  }
  ngOnInit(): void {
    console.log('header');
  }
}

import { Component } from '@angular/core';
import { ITab } from '@ng-yandex-mf/core';

@Component({
  selector: 'ya-music-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  tabs: ITab[];
  constructor() {
    this.tabs = [
      {
        title: 'Всё',
        link: '',
      },
      {
        title: 'Новые релизы',
        link: '/new-releases',
      },
      {
        title: 'Чарт',
        link: '/chart',
      },
      {
        title: 'Настроения и жанры',
        link: '/genres',
      },
    ];
  }
}

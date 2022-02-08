import { Component, Input } from '@angular/core';
import { ITab } from '@ng-yandex-mf/core';

@Component({
  selector: 'ng-yandex-mf-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @Input() tabs!: ITab[];
}

import { Component } from '@angular/core';
import { SidebarItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidebarItems: SidebarItem[] = [
    {
      name: 'Charts',
      route: 'charts'
    },
    {
      name: 'Grids',
      route: 'grids'
    }
  ];
}

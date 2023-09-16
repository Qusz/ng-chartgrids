import { Component } from '@angular/core';

import { defaultSidebarItems } from './components/sidebar/default-sidebar-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  sidebarItems = defaultSidebarItems;
}

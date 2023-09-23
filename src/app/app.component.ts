import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { defaultSidebarItems } from './components/sidebar/default-sidebar-items';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, DefaultLayoutComponent, HeaderComponent, SidebarComponent]
})
export class AppComponent {
  sidebarItems = defaultSidebarItems;
}

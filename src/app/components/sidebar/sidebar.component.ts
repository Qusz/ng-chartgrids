import { Component, Input } from '@angular/core';

import type { SidebarItem } from 'src/app/models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  @Input() items!: SidebarItem[];
}

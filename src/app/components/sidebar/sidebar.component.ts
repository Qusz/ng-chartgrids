import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { SidebarItem } from 'src/app/models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class SidebarComponent {
  @Input() items!: SidebarItem[];
}

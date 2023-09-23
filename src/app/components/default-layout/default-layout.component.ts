import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContainerComponent } from 'src/app/shared/container/container.component';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  standalone: true,
  imports: [CommonModule, ContainerComponent]
})
export class DefaultLayoutComponent {}

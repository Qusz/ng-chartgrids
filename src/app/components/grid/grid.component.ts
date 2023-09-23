import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { AgGridModule } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, AgGridModule]
})
export class GridComponent {
  @Input() gridOptions!: GridOptions;

  @Input() rowData!: Observable<any[]>;
}

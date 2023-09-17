import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {
  @Input() gridOptions!: GridOptions;

  @Input() rowData!: Observable<any[]>;
}

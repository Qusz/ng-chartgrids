import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { AllUsersGrid } from 'src/app/models';

import { Observable, map } from 'rxjs';

import { GridComponent } from 'src/app/components/grid/grid.component';

import { GetDataService } from '../../shared/get-data/get-data.service';
import { GridDataProcessorService } from '../../shared/grid-data-processor/grid-data-processor.service';

import { allCustomersGridOptions } from './grids-options';

@Component({
  templateUrl: './grids.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, GridComponent]
})
export class GridsComponent {
  gridOptions = {
    ...allCustomersGridOptions,
    onGridReady: () => this.onGridReady()
  };

  rowData$!: Observable<AllUsersGrid[]>;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private getDataService: GetDataService,
    private gridDataProcessorService: GridDataProcessorService
  ) {}

  private onGridReady() {
    this.getGridData();
  }

  private getGridData() {
    this.rowData$ = this.getDataService.getCustomers().pipe(
      map(({ data }) => {
        const { customers } = data;

        return customers ? this.gridDataProcessorService.processAllCustomers(customers) : [];
      })
    );

    this.changeDetectorRef.markForCheck();
  }
}

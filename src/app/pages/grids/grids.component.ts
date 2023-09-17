import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import type { AllUsersGrid } from 'src/app/models';

import { Observable, map } from 'rxjs';
import { GetDataService } from '../../shared/get-data/get-data.service';
import { GridDataProcessorService } from '../../shared/grid-data-processor/grid-data-processor.service';

import { allCustomersGridOptions } from './grids-options';

@Component({
  templateUrl: './grids.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
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
        return data.customers
          ? this.gridDataProcessorService.processAllCustomers(data.customers)
          : [];
      })
    );

    this.changeDetectorRef.markForCheck();
  }
}

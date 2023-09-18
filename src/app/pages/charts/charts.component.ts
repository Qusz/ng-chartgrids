import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import type { ChartData } from 'src/app/models';

import { Observable, map } from 'rxjs';
import { GetDataService } from 'src/app/shared/get-data/get-data.service';
import { ChartDataProccesorService } from 'src/app/shared/chart-data-proccesor/chart-data-proccesor.service';

import { allChartsSettings } from './charts-settings';

@Component({
  templateUrl: './charts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartsComponent implements OnInit {
  chartsSettings = allChartsSettings;

  genders$!: Observable<ChartData[]>;

  pointsOfRegistration$!: Observable<ChartData[]>;

  datesOfRegistration$!: Observable<ChartData[]>;

  constructor(
    private getDataService: GetDataService,
    private chartDataProccesor: ChartDataProccesorService
  ) {}

  ngOnInit(): void {
    this.getChartsData();
  }

  private getChartsData() {
    this.genders$ = this.getDataService.getGenders().pipe(
      map(({ data }) => {
        const { customers } = data;

        return customers ? this.chartDataProccesor.processGenders(customers) : [];
      })
    );

    this.pointsOfRegistration$ = this.getDataService.getPointsOfRegistration().pipe(
      map(({ data }) => {
        const { customers } = data;

        return customers ? this.chartDataProccesor.processRegistrartionPoints(customers) : [];
      })
    );

    this.datesOfRegistration$ = this.getDataService.getDatesOfRegistrartion().pipe(
      map(({ data }) => {
        const { customers } = data;

        return customers ? this.chartDataProccesor.processRegistrationDates(customers) : [];
      })
    );
  }
}

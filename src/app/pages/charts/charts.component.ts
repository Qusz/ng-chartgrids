import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import type { ChartsData } from 'src/app/models';

import { Subscription } from 'rxjs';
import { GetDataService } from 'src/app/shared/get-data/get-data.service';
import { ChartDataProccesorService } from 'src/app/shared/chart-data-proccesor/chart-data-proccesor.service';

import { allChartsSettings } from './charts-settings';

@Component({
  templateUrl: './charts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartsComponent implements OnInit, OnDestroy {
  processedData: ChartsData = {
    genders: [],
    pointsOfRegistration: [],
    datesOfRegistration: []
  };

  chartsSettings = allChartsSettings;

  private querySubscription$: Subscription = new Subscription();

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private getDataService: GetDataService,
    private chartDataProccesor: ChartDataProccesorService
  ) {}

  ngOnInit(): void {
    this.getChartsData();
  }

  ngOnDestroy(): void {
    this.querySubscription$.unsubscribe();
  }

  private getChartsData() {
    const genders$ = this.getDataService.getGenders();
    const pointsOfRegistration$ = this.getDataService.getPointsOfRegistration();
    const datesOfRegistration$ = this.getDataService.getDatesOfRegistrartion();

    this.querySubscription$.add(
      genders$.subscribe(({ data }) => {
        this.processedData.genders = this.chartDataProccesor.processGenders(data.customers);

        this.changeDetectorRef.markForCheck();
      })
    );

    this.querySubscription$.add(
      pointsOfRegistration$.subscribe(({ data }) => {
        this.processedData.pointsOfRegistration =
          this.chartDataProccesor.processRegistrartionPoints(data.customers);

        this.changeDetectorRef.markForCheck();
      })
    );

    this.querySubscription$.add(
      datesOfRegistration$.subscribe(({ data }) => {
        this.processedData.datesOfRegistration = this.chartDataProccesor.processRegistrationDates(
          data.customers
        );

        this.changeDetectorRef.markForCheck();
      })
    );
  }
}

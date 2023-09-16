import { Component, OnDestroy, OnInit } from '@angular/core';

import type { ChartsData } from 'src/app/models';

import { Subscription } from 'rxjs';
import { GetDataService } from 'src/app/shared/get-data/get-data.service';
import { DataProccesorService } from 'src/app/shared/data-proccesor/data-proccesor.service';

import { allChartsSettings } from './charts-settings';

@Component({
  templateUrl: './charts.component.html'
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
    private getDataService: GetDataService,
    private dataProccesorService: DataProccesorService
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
        this.processedData.genders = this.dataProccesorService.processGenders(data.customers);
      })
    );

    this.querySubscription$.add(
      pointsOfRegistration$.subscribe(({ data }) => {
        this.processedData.pointsOfRegistration =
          this.dataProccesorService.processRegistrartionPoints(data.customers);
      })
    );

    this.querySubscription$.add(
      datesOfRegistration$.subscribe(({ data }) => {
        this.processedData.datesOfRegistration = this.dataProccesorService.processRegistrationDates(
          data.customers
        );
      })
    );
  }
}

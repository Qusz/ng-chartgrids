import { Injectable } from '@angular/core';

import type { Customer, ChartDataCategory, ChartDataDate } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class DataProccesorService {
  processGenders(data: Customer[]): ChartDataCategory[] {
    const result = this.processCategoryData(data, (item) => item.sex ?? 'Unknown');

    return result;
  }

  processPointOfRegistration(data: Customer[]): ChartDataCategory[] {
    const result = this.processCategoryData(data, (item) => item.pointOfRegistration);

    result.sort((a, b) => (a.count > b.count ? 1 : -1));

    return result;
  }

  processRegistrationsPeriod(data: Customer[]): ChartDataDate[] {
    const convertedData = data.map((obj) =>
      typeof obj.registeredDate === 'string'
        ? { ...obj, registeredDate: this.timestampToDate(obj.registeredDate) }
        : obj
    );

    const result = this.processDateData(convertedData, (item) => item.registeredDate as number);

    result.sort((a, b) => a.date - b.date);

    return result;
  }

  private processCategoryData(
    data: Customer[],
    keySelector: (item: Customer) => string
  ): ChartDataCategory[] {
    const result: ChartDataCategory[] = [];

    data.forEach((item) => {
      const keyValue = keySelector(item);

      const existingItem = result.find((obj) => obj.value === keyValue);

      if (existingItem) {
        existingItem.count += 1;
      } else {
        result.push({ value: keyValue, count: 1 });
      }
    });

    return result;
  }

  private processDateData(
    data: Customer[],
    keySelector: (item: Customer) => number
  ): ChartDataDate[] {
    const result: ChartDataDate[] = [];

    data.forEach((item) => {
      const keyValue = keySelector(item);

      const existingItem = result.find((obj) => obj.date === keyValue);

      if (existingItem) {
        existingItem.value += 1;
      } else {
        result.push({ date: keyValue, value: 1 });
      }
    });

    return result;
  }

  private timestampToDate(timestamp: string) {
    return new Date(timestamp).setHours(0, 0, 0, 0);
  }
}

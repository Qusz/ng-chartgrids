import { Injectable } from '@angular/core';

import type {
  DataProcessorSettings,
  ChartData,
  GenderData,
  PointOfRegistrationData,
  RegisteredDateData
} from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class ChartDataProccesorService {
  processGenders(data: GenderData[]): ChartData[] {
    const settings: DataProcessorSettings = {
      data,
      keySelector: (item) => item.gender ?? 'Unknown',
      valueKey: 'gender',
      countKey: 'count'
    };

    return this.processData<ChartData>(settings);
  }

  processRegistrartionPoints(data: PointOfRegistrationData[]): ChartData[] {
    const settings: DataProcessorSettings = {
      data,
      keySelector: (item) => item.pointOfRegistration,
      valueKey: 'point',
      countKey: 'count'
    };

    const result = this.processData<ChartData>(settings);

    result.sort((a, b) => (a['count'] > b['count'] ? 1 : -1));

    return result;
  }

  processRegistrationDates(data: RegisteredDateData[]): ChartData[] {
    // Convert string date to timpestamp
    const convertedData = data.map((obj) =>
      typeof obj.registeredDate === 'string'
        ? { ...obj, registeredDate: this.timestampToDate(obj.registeredDate) }
        : obj
    );

    const settings: DataProcessorSettings = {
      data: convertedData,
      keySelector: (item) => item.registeredDate,
      valueKey: 'date',
      countKey: 'count'
    };

    const result = this.processData<ChartData>(settings);

    result.sort((a, b) => (a['date'] as number) - (b['date'] as number));

    return result;
  }

  private processData<T>(settings: DataProcessorSettings): T[] {
    const result: T[] = [];
    const { data, keySelector, countKey, valueKey } = settings;

    data.forEach((item) => {
      const keyValue = keySelector(item);

      const existingItem = result.find((obj) => (obj as any)[valueKey] === keyValue);

      if (existingItem) {
        (existingItem as any)[countKey] += 1;
      } else {
        result.push({ [valueKey]: keyValue, [countKey]: 1 } as T);
      }
    });

    return result;
  }

  private timestampToDate(timestamp: string) {
    return new Date(timestamp).setHours(0, 0, 0, 0);
  }
}

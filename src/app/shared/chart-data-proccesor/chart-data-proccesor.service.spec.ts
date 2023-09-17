import { TestBed } from '@angular/core/testing';

import { ChartDataProccesorService } from './chart-data-proccesor.service';

describe('DataProccesorService', () => {
  let service: ChartDataProccesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartDataProccesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

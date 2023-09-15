import { TestBed } from '@angular/core/testing';

import { DataProccesorService } from './data-proccesor.service';

describe('DataProccesorService', () => {
  let service: DataProccesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataProccesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

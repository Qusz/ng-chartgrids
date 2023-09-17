import { TestBed } from '@angular/core/testing';

import { GridDataProcessorService } from './grid-data-processor.service';

describe('GridDataProcessorService', () => {
  let service: GridDataProcessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridDataProcessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

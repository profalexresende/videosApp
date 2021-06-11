import { TestBed } from '@angular/core/testing';

import { GeneroSeriesService } from './genero-series.service';

describe('GeneroSeriesService', () => {
  let service: GeneroSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneroSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

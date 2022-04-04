import { TestBed } from '@angular/core/testing';

import { FlightListService } from './flight-list.service';

describe('FlightListService', () => {
  let service: FlightListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DataserviceService } from './data.service';

describe('DataserviceService', () => {
  let service: DataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ExploreCityService } from './explore-city.service';

describe('ExploreCityService', () => {
  let service: ExploreCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExploreCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ExpiriencesService } from './expiriences.service';

describe('ExpiriencesService', () => {
  let service: ExpiriencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpiriencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

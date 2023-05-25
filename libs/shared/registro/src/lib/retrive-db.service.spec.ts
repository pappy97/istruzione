import { TestBed } from '@angular/core/testing';

import { RetriveDBService } from './retrive-db.service';

describe('RetriveDBService', () => {
  let service: RetriveDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetriveDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

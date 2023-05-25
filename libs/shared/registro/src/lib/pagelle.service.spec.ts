import { TestBed } from '@angular/core/testing';

import { PagelleService } from './pagelle.service';

describe('PagelleService', () => {
  let service: PagelleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagelleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

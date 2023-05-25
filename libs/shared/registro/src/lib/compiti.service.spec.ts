import { TestBed } from '@angular/core/testing';

import { CompitiService } from './compiti.service';

describe('CompitiService', () => {
  let service: CompitiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompitiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

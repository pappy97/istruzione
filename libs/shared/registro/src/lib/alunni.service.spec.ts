import { TestBed } from '@angular/core/testing';

import { AlunniService } from './alunni.service';

describe('AlunniService', () => {
  let service: AlunniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

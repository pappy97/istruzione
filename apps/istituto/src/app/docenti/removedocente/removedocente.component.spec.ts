import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovedocenteComponent } from './removedocente.component';

describe('RemovedocenteComponent', () => {
  let component: RemovedocenteComponent;
  let fixture: ComponentFixture<RemovedocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemovedocenteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RemovedocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

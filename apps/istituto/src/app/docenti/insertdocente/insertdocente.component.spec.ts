import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertdocenteComponent } from './insertdocente.component';

describe('InsertdocenteComponent', () => {
  let component: InsertdocenteComponent;
  let fixture: ComponentFixture<InsertdocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertdocenteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InsertdocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

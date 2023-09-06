import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimuoviDocenteComponent } from './rimuovi-docente.component';

describe('RimuoviDocenteComponent', () => {
  let component: RimuoviDocenteComponent;
  let fixture: ComponentFixture<RimuoviDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RimuoviDocenteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RimuoviDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

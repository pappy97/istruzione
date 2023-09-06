import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaDocenteComponent } from './modifica-docente.component';

describe('ModificaDocenteComponent', () => {
  let component: ModificaDocenteComponent;
  let fixture: ComponentFixture<ModificaDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificaDocenteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModificaDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

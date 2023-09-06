import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoDocenteComponent } from './inserimento-docente.component';

describe('InserimentoDocenteComponent', () => {
  let component: InserimentoDocenteComponent;
  let fixture: ComponentFixture<InserimentoDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InserimentoDocenteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InserimentoDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificaStudenteComponent } from './verifica-studente.component';

describe('VerificaStudenteComponent', () => {
  let component: VerificaStudenteComponent;
  let fixture: ComponentFixture<VerificaStudenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerificaStudenteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VerificaStudenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

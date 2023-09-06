import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoAlunnoComponent } from './inserimento-alunno.component';

describe('InserimentoAlunnoComponent', () => {
  let component: InserimentoAlunnoComponent;
  let fixture: ComponentFixture<InserimentoAlunnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InserimentoAlunnoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InserimentoAlunnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

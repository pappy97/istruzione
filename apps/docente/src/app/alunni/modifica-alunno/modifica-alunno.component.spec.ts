import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaAlunnoComponent } from './modifica-alunno.component';

describe('ModificaAlunnoComponent', () => {
  let component: ModificaAlunnoComponent;
  let fixture: ComponentFixture<ModificaAlunnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificaAlunnoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModificaAlunnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

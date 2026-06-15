import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestioneAlunniComponent } from './gestione-alunni.component';

describe('GestioneAlunniComponent', () => {
  let component: GestioneAlunniComponent;
  let fixture: ComponentFixture<GestioneAlunniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestioneAlunniComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GestioneAlunniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

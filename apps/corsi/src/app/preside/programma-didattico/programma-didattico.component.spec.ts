import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgrammaDidatticoComponent } from './programma-didattico.component';

describe('ProgrammaDidatticoComponent', () => {
  let component: ProgrammaDidatticoComponent;
  let fixture: ComponentFixture<ProgrammaDidatticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgrammaDidatticoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgrammaDidatticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

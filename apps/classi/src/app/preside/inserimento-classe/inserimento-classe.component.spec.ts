import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InserimentoClasseComponent } from './inserimento-classe.component';

describe('InserimentoClasseComponent', () => {
  let component: InserimentoClasseComponent;
  let fixture: ComponentFixture<InserimentoClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InserimentoClasseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InserimentoClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

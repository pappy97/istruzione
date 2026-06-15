import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoricoAlunnoComponent } from './storico-alunno.component';

describe('StoricoAlunnoComponent', () => {
  let component: StoricoAlunnoComponent;
  let fixture: ComponentFixture<StoricoAlunnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoricoAlunnoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StoricoAlunnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardAlunnoComponent } from './dashboard-alunno.component';

describe('DashboardAlunnoComponent', () => {
  let component: DashboardAlunnoComponent;
  let fixture: ComponentFixture<DashboardAlunnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardAlunnoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardAlunnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

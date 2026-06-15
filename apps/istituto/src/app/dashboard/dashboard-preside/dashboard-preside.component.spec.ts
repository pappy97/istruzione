import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardPresideComponent } from './dashboard-preside.component';

describe('DashboardPresideComponent', () => {
  let component: DashboardPresideComponent;
  let fixture: ComponentFixture<DashboardPresideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardPresideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPresideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

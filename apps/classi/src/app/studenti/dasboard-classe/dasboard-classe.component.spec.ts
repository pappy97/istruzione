import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DasboardClasseComponent } from './dasboard-classe.component';

describe('DasboardClasseComponent', () => {
  let component: DasboardClasseComponent;
  let fixture: ComponentFixture<DasboardClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DasboardClasseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DasboardClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

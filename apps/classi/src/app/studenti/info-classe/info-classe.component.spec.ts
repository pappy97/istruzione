import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoClasseComponent } from './info-classe.component';

describe('InfoClasseComponent', () => {
  let component: InfoClasseComponent;
  let fixture: ComponentFixture<InfoClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoClasseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

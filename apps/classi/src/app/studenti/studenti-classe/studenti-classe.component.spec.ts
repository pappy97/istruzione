import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentiClasseComponent } from './studenti-classe.component';

describe('StudentiClasseComponent', () => {
  let component: StudentiClasseComponent;
  let fixture: ComponentFixture<StudentiClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentiClasseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentiClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrarioClasseComponent } from './orario-classe.component';

describe('OrarioClasseComponent', () => {
  let component: OrarioClasseComponent;
  let fixture: ComponentFixture<OrarioClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrarioClasseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrarioClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

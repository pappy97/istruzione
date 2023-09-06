import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunniComponent } from './alunni.component';

describe('AlunniComponent', () => {
  let component: AlunniComponent;
  let fixture: ComponentFixture<AlunniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlunniComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlunniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

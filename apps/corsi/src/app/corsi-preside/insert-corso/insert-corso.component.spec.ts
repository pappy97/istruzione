import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCorsoComponent } from './insert-corso.component';

describe('InsertCorsoComponent', () => {
  let component: InsertCorsoComponent;
  let fixture: ComponentFixture<InsertCorsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertCorsoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InsertCorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCorsoComponent } from './confirm-corso.component';

describe('ConfirmCorsoComponent', () => {
  let component: ConfirmCorsoComponent;
  let fixture: ComponentFixture<ConfirmCorsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmCorsoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmCorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

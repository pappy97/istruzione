import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCorsoComponent } from './update-corso.component';

describe('UpdateCorsoComponent', () => {
  let component: UpdateCorsoComponent;
  let fixture: ComponentFixture<UpdateCorsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateCorsoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateCorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

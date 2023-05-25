import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCorsoComponent } from './remove-corso.component';

describe('RemoveCorsoComponent', () => {
  let component: RemoveCorsoComponent;
  let fixture: ComponentFixture<RemoveCorsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemoveCorsoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RemoveCorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

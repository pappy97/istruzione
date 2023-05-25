import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsiDocentiComponent } from './corsi-docenti.component';

describe('CorsiDocentiComponent', () => {
  let component: CorsiDocentiComponent;
  let fixture: ComponentFixture<CorsiDocentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorsiDocentiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CorsiDocentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

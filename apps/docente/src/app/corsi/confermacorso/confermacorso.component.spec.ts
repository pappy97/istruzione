import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfermacorsoComponent } from './confermacorso.component';

describe('ConfermacorsoComponent', () => {
  let component: ConfermacorsoComponent;
  let fixture: ComponentFixture<ConfermacorsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfermacorsoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfermacorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

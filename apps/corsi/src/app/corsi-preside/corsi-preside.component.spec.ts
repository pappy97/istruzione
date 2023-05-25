import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsiPresideComponent } from './corsi-preside.component';

describe('CorsiPresideComponent', () => {
  let component: CorsiPresideComponent;
  let fixture: ComponentFixture<CorsiPresideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorsiPresideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CorsiPresideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimuovicorsoComponent } from './rimuovicorso.component';

describe('RimuovicorsoComponent', () => {
  let component: RimuovicorsoComponent;
  let fixture: ComponentFixture<RimuovicorsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RimuovicorsoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RimuovicorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

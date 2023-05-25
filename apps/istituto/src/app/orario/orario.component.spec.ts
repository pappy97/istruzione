import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrarioComponent } from './orario.component';

describe('OrarioComponent', () => {
  let component: OrarioComponent;
  let fixture: ComponentFixture<OrarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrarioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

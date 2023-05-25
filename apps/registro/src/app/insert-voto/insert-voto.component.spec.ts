import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertVotoComponent } from './insert-voto.component';

describe('InsertVotoComponent', () => {
  let component: InsertVotoComponent;
  let fixture: ComponentFixture<InsertVotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertVotoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InsertVotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

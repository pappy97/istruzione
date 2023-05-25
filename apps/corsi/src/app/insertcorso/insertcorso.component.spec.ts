import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertcorsoComponent } from './insertcorso.component';

describe('InsertcorsoComponent', () => {
  let component: InsertcorsoComponent;
  let fixture: ComponentFixture<InsertcorsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertcorsoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InsertcorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

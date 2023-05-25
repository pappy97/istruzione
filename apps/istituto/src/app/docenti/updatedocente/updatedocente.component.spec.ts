import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedocenteComponent } from './updatedocente.component';

describe('UpdatedocenteComponent', () => {
  let component: UpdatedocenteComponent;
  let fixture: ComponentFixture<UpdatedocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatedocenteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatedocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

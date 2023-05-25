import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertAlunnoComponent } from './insert-alunno.component';

describe('InsertAlunnoComponent', () => {
  let component: InsertAlunnoComponent;
  let fixture: ComponentFixture<InsertAlunnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertAlunnoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InsertAlunnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

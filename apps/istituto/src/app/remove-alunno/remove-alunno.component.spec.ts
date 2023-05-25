import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAlunnoComponent } from './remove-alunno.component';

describe('RemoveAlunnoComponent', () => {
  let component: RemoveAlunnoComponent;
  let fixture: ComponentFixture<RemoveAlunnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemoveAlunnoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RemoveAlunnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

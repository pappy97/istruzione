import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAlunnoComponent } from './update-alunno.component';

describe('UpdateAlunnoComponent', () => {
  let component: UpdateAlunnoComponent;
  let fixture: ComponentFixture<UpdateAlunnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateAlunnoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateAlunnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

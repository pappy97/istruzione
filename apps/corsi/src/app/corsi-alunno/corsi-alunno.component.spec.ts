import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsiAlunnoComponent } from './corsi-alunno.component';

describe('CorsiAlunnoComponent', () => {
  let component: CorsiAlunnoComponent;
  let fixture: ComponentFixture<CorsiAlunnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorsiAlunnoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CorsiAlunnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

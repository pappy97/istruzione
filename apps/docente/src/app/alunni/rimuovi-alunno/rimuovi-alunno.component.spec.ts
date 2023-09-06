import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimuoviAlunnoComponent } from './rimuovi-alunno.component';

describe('RimuoviAlunnoComponent', () => {
  let component: RimuoviAlunnoComponent;
  let fixture: ComponentFixture<RimuoviAlunnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RimuoviAlunnoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RimuoviAlunnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

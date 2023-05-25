import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagellaAlunnoComponent } from './pagella-alunno.component';

describe('PagellaAlunnoComponent', () => {
  let component: PagellaAlunnoComponent;
  let fixture: ComponentFixture<PagellaAlunnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagellaAlunnoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagellaAlunnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagellaDocenteComponent } from './pagella-docente.component';

describe('PagellaDocenteComponent', () => {
  let component: PagellaDocenteComponent;
  let fixture: ComponentFixture<PagellaDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagellaDocenteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagellaDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagellaComponent } from './pagella.component';

describe('PagellaComponent', () => {
  let component: PagellaComponent;
  let fixture: ComponentFixture<PagellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagellaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

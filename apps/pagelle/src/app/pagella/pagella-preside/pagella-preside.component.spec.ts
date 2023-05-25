import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagellaPresideComponent } from './pagella-preside.component';

describe('PagellaPresideComponent', () => {
  let component: PagellaPresideComponent;
  let fixture: ComponentFixture<PagellaPresideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagellaPresideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagellaPresideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

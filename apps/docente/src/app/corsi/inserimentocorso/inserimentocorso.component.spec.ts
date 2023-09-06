import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentocorsoComponent } from './inserimentocorso.component';

describe('InserimentocorsoComponent', () => {
  let component: InserimentocorsoComponent;
  let fixture: ComponentFixture<InserimentocorsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InserimentocorsoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InserimentocorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

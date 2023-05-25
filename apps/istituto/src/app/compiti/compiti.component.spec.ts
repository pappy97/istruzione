import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompitiComponent } from './compiti.component';

describe('CompitiComponent', () => {
  let component: CompitiComponent;
  let fixture: ComponentFixture<CompitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompitiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

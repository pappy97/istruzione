import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCompitiComponent } from './insert-compiti.component';

describe('InsertCompitiComponent', () => {
  let component: InsertCompitiComponent;
  let fixture: ComponentFixture<InsertCompitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertCompitiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InsertCompitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

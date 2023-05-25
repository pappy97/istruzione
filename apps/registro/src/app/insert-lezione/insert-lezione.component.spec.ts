import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertLezioneComponent } from './insert-lezione.component';

describe('InsertLezioneComponent', () => {
  let component: InsertLezioneComponent;
  let fixture: ComponentFixture<InsertLezioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertLezioneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InsertLezioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

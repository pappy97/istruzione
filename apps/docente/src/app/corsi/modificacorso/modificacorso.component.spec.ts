import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacorsoComponent } from './modificacorso.component';

describe('ModificacorsoComponent', () => {
  let component: ModificacorsoComponent;
  let fixture: ComponentFixture<ModificacorsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificacorsoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModificacorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

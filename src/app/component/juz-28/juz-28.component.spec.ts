import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz28Component } from './juz-28.component';

describe('Juz28Component', () => {
  let component: Juz28Component;
  let fixture: ComponentFixture<Juz28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz28Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz10Component } from './juz-10.component';

describe('Juz10Component', () => {
  let component: Juz10Component;
  let fixture: ComponentFixture<Juz10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

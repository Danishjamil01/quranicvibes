import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz17Component } from './juz-17.component';

describe('Juz17Component', () => {
  let component: Juz17Component;
  let fixture: ComponentFixture<Juz17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz17Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

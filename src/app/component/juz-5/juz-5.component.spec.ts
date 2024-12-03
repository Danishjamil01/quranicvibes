import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz5Component } from './juz-5.component';

describe('Juz5Component', () => {
  let component: Juz5Component;
  let fixture: ComponentFixture<Juz5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz18Component } from './juz-18.component';

describe('Juz18Component', () => {
  let component: Juz18Component;
  let fixture: ComponentFixture<Juz18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz18Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz7Component } from './juz-7.component';

describe('Juz7Component', () => {
  let component: Juz7Component;
  let fixture: ComponentFixture<Juz7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

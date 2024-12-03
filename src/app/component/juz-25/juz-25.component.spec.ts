import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz25Component } from './juz-25.component';

describe('Juz25Component', () => {
  let component: Juz25Component;
  let fixture: ComponentFixture<Juz25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz25Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

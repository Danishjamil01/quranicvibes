import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz9Component } from './juz-9.component';

describe('Juz9Component', () => {
  let component: Juz9Component;
  let fixture: ComponentFixture<Juz9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

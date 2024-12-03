import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz27Component } from './juz-27.component';

describe('Juz27Component', () => {
  let component: Juz27Component;
  let fixture: ComponentFixture<Juz27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz27Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

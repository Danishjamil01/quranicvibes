import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz23Component } from './juz-23.component';

describe('Juz23Component', () => {
  let component: Juz23Component;
  let fixture: ComponentFixture<Juz23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz23Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz15Component } from './juz-15.component';

describe('Juz15Component', () => {
  let component: Juz15Component;
  let fixture: ComponentFixture<Juz15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz15Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz29Component } from './juz-29.component';

describe('Juz29Component', () => {
  let component: Juz29Component;
  let fixture: ComponentFixture<Juz29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz29Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

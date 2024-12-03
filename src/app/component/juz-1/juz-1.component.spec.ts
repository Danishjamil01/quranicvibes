import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz1Component } from './juz-1.component';

describe('Juz1Component', () => {
  let component: Juz1Component;
  let fixture: ComponentFixture<Juz1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

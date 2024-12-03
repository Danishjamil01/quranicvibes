import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz11Component } from './juz-11.component';

describe('Juz11Component', () => {
  let component: Juz11Component;
  let fixture: ComponentFixture<Juz11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz13Component } from './juz-13.component';

describe('Juz13Component', () => {
  let component: Juz13Component;
  let fixture: ComponentFixture<Juz13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz13Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

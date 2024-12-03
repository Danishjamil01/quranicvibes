import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz14Component } from './juz-14.component';

describe('Juz14Component', () => {
  let component: Juz14Component;
  let fixture: ComponentFixture<Juz14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz14Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

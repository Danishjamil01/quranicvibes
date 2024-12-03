import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz3Component } from './juz-3.component';

describe('Juz3Component', () => {
  let component: Juz3Component;
  let fixture: ComponentFixture<Juz3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz24Component } from './juz-24.component';

describe('Juz24Component', () => {
  let component: Juz24Component;
  let fixture: ComponentFixture<Juz24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz24Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

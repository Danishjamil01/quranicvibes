import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz21Component } from './juz-21.component';

describe('Juz21Component', () => {
  let component: Juz21Component;
  let fixture: ComponentFixture<Juz21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz21Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

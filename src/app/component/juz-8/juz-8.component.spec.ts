import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz8Component } from './juz-8.component';

describe('Juz8Component', () => {
  let component: Juz8Component;
  let fixture: ComponentFixture<Juz8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

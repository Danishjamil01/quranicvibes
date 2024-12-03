import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz12Component } from './juz-12.component';

describe('Juz12Component', () => {
  let component: Juz12Component;
  let fixture: ComponentFixture<Juz12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

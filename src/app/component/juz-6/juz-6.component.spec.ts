import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz6Component } from './juz-6.component';

describe('Juz6Component', () => {
  let component: Juz6Component;
  let fixture: ComponentFixture<Juz6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

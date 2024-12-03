import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz20Component } from './juz-20.component';

describe('Juz20Component', () => {
  let component: Juz20Component;
  let fixture: ComponentFixture<Juz20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz20Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

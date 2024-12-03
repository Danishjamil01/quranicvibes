import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz19Component } from './juz-19.component';

describe('Juz19Component', () => {
  let component: Juz19Component;
  let fixture: ComponentFixture<Juz19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz19Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

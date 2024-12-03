import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz4Component } from './juz-4.component';

describe('Juz4Component', () => {
  let component: Juz4Component;
  let fixture: ComponentFixture<Juz4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

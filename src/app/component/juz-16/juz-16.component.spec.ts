import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz16Component } from './juz-16.component';

describe('Juz16Component', () => {
  let component: Juz16Component;
  let fixture: ComponentFixture<Juz16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz16Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

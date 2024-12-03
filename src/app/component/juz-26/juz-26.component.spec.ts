import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz26Component } from './juz-26.component';

describe('Juz26Component', () => {
  let component: Juz26Component;
  let fixture: ComponentFixture<Juz26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz26Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

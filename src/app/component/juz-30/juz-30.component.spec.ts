import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz30Component } from './juz-30.component';

describe('Juz30Component', () => {
  let component: Juz30Component;
  let fixture: ComponentFixture<Juz30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz30Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

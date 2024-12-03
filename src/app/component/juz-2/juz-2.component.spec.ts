import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz2Component } from './juz-2.component';

describe('Juz2Component', () => {
  let component: Juz2Component;
  let fixture: ComponentFixture<Juz2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

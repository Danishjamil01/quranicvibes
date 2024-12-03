import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juz22Component } from './juz-22.component';

describe('Juz22Component', () => {
  let component: Juz22Component;
  let fixture: ComponentFixture<Juz22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Juz22Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Juz22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

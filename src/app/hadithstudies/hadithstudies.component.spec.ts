import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HadithstudiesComponent } from './hadithstudies.component';

describe('HadithstudiesComponent', () => {
  let component: HadithstudiesComponent;
  let fixture: ComponentFixture<HadithstudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HadithstudiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HadithstudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

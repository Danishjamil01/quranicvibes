import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslamicfestivalComponent } from './islamicfestival.component';

describe('IslamicfestivalComponent', () => {
  let component: IslamicfestivalComponent;
  let fixture: ComponentFixture<IslamicfestivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IslamicfestivalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IslamicfestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

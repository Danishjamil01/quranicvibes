import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslamicfiqhComponent } from './islamicfiqh.component';

describe('IslamicfiqhComponent', () => {
  let component: IslamicfiqhComponent;
  let fixture: ComponentFixture<IslamicfiqhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IslamicfiqhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IslamicfiqhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

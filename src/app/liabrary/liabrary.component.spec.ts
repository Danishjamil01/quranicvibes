import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiabraryComponent } from './liabrary.component';

describe('LiabraryComponent', () => {
  let component: LiabraryComponent;
  let fixture: ComponentFixture<LiabraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiabraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiabraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

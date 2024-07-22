import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslamichistoryComponent } from './islamichistory.component';

describe('IslamichistoryComponent', () => {
  let component: IslamichistoryComponent;
  let fixture: ComponentFixture<IslamichistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IslamichistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IslamichistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
